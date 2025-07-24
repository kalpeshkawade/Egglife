import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useMutation } from '@tanstack/react-query';
import { useToast } from '@/hooks/use-toast';
import { apiRequest } from '@/lib/queryClient';

export default function ContactUs() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: '',
    attachments: []
  });

  const contactMutation = useMutation({
    mutationFn: (data) => apiRequest('/api/contact', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    }),
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
      });
      setFormData({
        fullName: '',
        email: '',
        subject: '',
        message: '',
        attachments: []
      });
    },
    onError: () => {
      toast({
        title: "Failed to send message",
        description: "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 10) {
      toast({
        title: "Too many files",
        description: "Maximum 10 files allowed.",
        variant: "destructive",
      });
      return;
    }

    // Check file sizes (10MB limit per file)
    const oversizedFiles = files.filter(file => file.size > 10 * 1024 * 1024);
    if (oversizedFiles.length > 0) {
      toast({
        title: "Files too large",
        description: "Each file must be under 10MB.",
        variant: "destructive",
      });
      return;
    }

    setFormData(prev => ({
      ...prev,
      attachments: files
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    contactMutation.mutate(formData);
  };

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <div className="py-20 bg-gradient-to-br from-purple-50 to-orange-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-4">
            Get<span style={{ color: '#521FCC' }}>in</span>touch
          </h1>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              We'd love to hear from you!
            </h2>
            <p className="text-lg text-gray-600">
              For support and general inquiries, please complete the form below:
            </p>
          </div>

          <Card className="shadow-xl border-0 bg-gradient-to-br from-white to-gray-50">
            <CardContent className="p-8 lg:p-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Contact us
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full name*
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#521FCC] focus:border-[#521FCC] transition-colors"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email*
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#521FCC] focus:border-[#521FCC] transition-colors"
                    placeholder="Enter your email address"
                    required
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject*
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => handleInputChange('subject', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#521FCC] focus:border-[#521FCC] transition-colors"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="product">Product Question</option>
                    <option value="order">Order Support</option>
                    <option value="recipe">Recipe Support</option>
                    <option value="wholesale">Wholesale Inquiry</option>
                    <option value="nutrition">Nutrition Information</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message*
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#521FCC] focus:border-[#521FCC] transition-colors min-h-[120px] resize-vertical"
                    placeholder="Enter your message"
                    required
                  />
                </div>

                {/* File Upload */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Attach Files
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-2xl p-6 text-center">
                    <input
                      type="file"
                      multiple
                      onChange={handleFileUpload}
                      className="hidden"
                      id="file-upload"
                      accept="*/*"
                    />
                    <label
                      htmlFor="file-upload"
                      className="cursor-pointer inline-block bg-gray-100 hover:bg-gray-200 px-6 py-3 rounded-full font-medium text-gray-700 transition-colors"
                    >
                      Choose Files
                    </label>
                    <p className="text-sm text-gray-500 mt-2">
                      Attach up to 10 files. The maximum allowed size per file is 10 MB.
                    </p>
                    {formData.attachments.length > 0 && (
                      <div className="mt-4">
                        <p className="text-sm font-medium text-gray-700">
                          {formData.attachments.length} file(s) selected:
                        </p>
                        <div className="text-sm text-gray-600 mt-1">
                          {formData.attachments.map((file, index) => (
                            <div key={index} className="truncate">
                              {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Submit Button */}
                <div className="text-center pt-6">
                  <Button
                    type="submit"
                    disabled={contactMutation.isPending}
                    className="group relative bg-orange-primary hover:bg-orange-600 text-white px-12 py-4 rounded-full font-bold text-lg transition-all duration-300 disabled:opacity-50 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    {contactMutation.isPending ? "Sending..." : "Send"}
                  </Button>
                </div>

                {/* reCAPTCHA Notice */}
                <div className="text-center mt-6">
                  <p className="text-xs text-gray-500">
                    This site is protected by reCAPTCHA Enterprise and the Google{' '}
                    <a href="https://policies.google.com/privacy" className="text-[#521FCC] hover:underline">
                      Privacy Policy
                    </a>{' '}
                    and{' '}
                    <a href="https://policies.google.com/terms" className="text-[#521FCC] hover:underline">
                      Terms of Service
                    </a>{' '}
                    apply.
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Footer Note */}
          <div className="text-center mt-8">
            <p className="text-sm text-gray-500 italic">
              Please note our customer service team may request a separate copy of any uploaded documentation for quality assurance purposes
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Protein Stickers */}
      <div className="fixed bottom-10 right-10 z-10 opacity-30 pointer-events-none">
        <div className="flex space-x-2">
          <img
            src="https://cdn.prod.website-files.com/67d46f1ca88fba5bdcfe889a/67e688cd90020d679ef23923_protein-sticker-02.svg"
            alt="Protein Sticker"
            className="w-16 h-16 animate-bounce"
            style={{ animationDelay: '0s' }}
          />
          <img
            src="https://cdn.prod.website-files.com/67d46f1ca88fba5bdcfe889a/67e688cd44f8642076065aa5_protein-sticker-01.svg"
            alt="Protein Sticker"
            className="w-16 h-16 animate-bounce"
            style={{ animationDelay: '0.5s' }}
          />
        </div>
      </div>
    </div>
  );
}