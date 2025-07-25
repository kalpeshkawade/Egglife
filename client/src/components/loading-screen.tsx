import { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export default function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          // Wait a bit then fade out
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(onLoadingComplete, 500); // Wait for fade out animation
          }, 300);
          return 100;
        }
        
        // Simulate realistic loading progression
        const increment = Math.random() * 15 + 5; // Random increment between 5-20
        return Math.min(prev + increment, 100);
      });
    }, 150); // Update every 150ms for smooth animation

    return () => clearInterval(progressInterval);
  }, [onLoadingComplete]);

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-white via-purple-50 to-orange-50 transition-opacity duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Background animated elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-br from-orange-200 to-yellow-200 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-20 animate-ping"></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-gradient-to-br from-green-200 to-blue-200 rounded-full opacity-20 animate-pulse"></div>
      </div>

      <div className="relative z-10 text-center">
        {/* EggLife Logo */}
        <div className="mb-8 flex items-center justify-center space-x-3">
          <div className="w-16 h-16 bg-gradient-to-br from-[#521FCC] to-purple-600 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
            <span className="text-white font-bold text-2xl">E</span>
          </div>
          <div className="text-4xl font-bold text-gray-800">
            Egg<span className="text-[#521FCC]">Life</span>
          </div>
        </div>

        {/* Loading Text */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            Loading your perfect wrap experience...
          </h2>
          <div className="text-sm text-gray-500 animate-pulse">
            Preparing fresh content with authentic nutrition
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-80 max-w-sm mx-auto mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-600">Progress</span>
            <span className="text-sm font-bold text-[#521FCC]">{Math.round(progress)}%</span>
          </div>
          
          <div className="w-full bg-gray-200 rounded-full h-3 shadow-inner">
            <div 
              className="bg-gradient-to-r from-[#521FCC] to-purple-400 h-3 rounded-full transition-all duration-300 ease-out shadow-lg"
              style={{ width: `${progress}%` }}
            >
              <div className="h-full bg-gradient-to-r from-transparent to-white opacity-30 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Floating Product Icons */}
        <div className="flex justify-center space-x-4 mb-8">
          {[
            { color: '#A61456', delay: '0s' },
            { color: '#F87402', delay: '0.2s' },
            { color: '#00A3D8', delay: '0.4s' },
            { color: '#9FCB30', delay: '0.6s' },
            { color: '#FFCC12', delay: '0.8s' },
            { color: '#AF2650', delay: '1s' }
          ].map((item, index) => (
            <div 
              key={index}
              className="w-3 h-3 rounded-full animate-bounce"
              style={{ 
                backgroundColor: item.color,
                animationDelay: item.delay,
                animationDuration: '1.2s'
              }}
            />
          ))}
        </div>

        {/* Loading States */}
        <div className="text-xs text-gray-400 font-medium">
          {progress < 25 && "Initializing EggLife experience..."}
          {progress >= 25 && progress < 50 && "Loading authentic product data..."}
          {progress >= 50 && progress < 75 && "Preparing recipe collections..."}
          {progress >= 75 && progress < 95 && "Optimizing for your device..."}
          {progress >= 95 && "Almost ready! 🥚"}
        </div>
      </div>

      {/* Subtle animation overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-transparent animate-pulse pointer-events-none"></div>
    </div>
  );
}