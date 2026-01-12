import { useState } from 'react';
import { Calendar, Clock, User, Mail, Phone, MessageSquare, Check, X } from 'lucide-react';
import toast from 'react-hot-toast';

const BookingSystem = () => {
  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    service: '',
    date: '',
    time: '',
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const services = [
    { id: 'consultation', name: 'Free Consultation', duration: '30 min', price: 'Free' },
    { id: 'website-audit', name: 'Website Audit', duration: '45 min', price: '₹2,000' },
    { id: 'strategy-session', name: 'Strategy Session', duration: '60 min', price: '₹5,000' },
    { id: 'technical-support', name: 'Technical Support', duration: '30 min', price: '₹1,500' },
  ];

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM',
  ];

  const handleInputChange = (field, value) => {
    setBookingData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate all fields
    if (!bookingData.service || !bookingData.date || !bookingData.time || 
        !bookingData.name || !bookingData.email || !bookingData.phone) {
      toast.error('Please fill in all required fields');
      return;
    }

    try {
      // Send booking notification via EmailJS
      const emailjs = (await import('@emailjs/browser')).default;
      
      const selectedService = services.find(s => s.id === bookingData.service);
      
      // Format the booking details for email
      const templateParams = {
        to_name: 'Shantanu Solutions Team',
        from_name: bookingData.name,
        from_email: bookingData.email,
        phone: bookingData.phone,
        service_name: selectedService?.name || bookingData.service,
        service_duration: selectedService?.duration || 'N/A',
        service_price: selectedService?.price || 'N/A',
        booking_date: new Date(bookingData.date).toLocaleDateString('en-IN', { 
          weekday: 'long', 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        }),
        booking_time: bookingData.time,
        message: bookingData.message || 'No additional notes',
        booking_type: 'New Booking Request',
      };

      // Send email using EmailJS
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_BOOKING_TEMPLATE_ID || import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      
      toast.success('Booking confirmed! Check your email for details.', {
        duration: 5000,
        icon: '✅',
      });
      
      // Reset form
      setBookingData({
        service: '',
        date: '',
        time: '',
        name: '',
        email: '',
        phone: '',
        message: '',
      });
      setStep(1);
    } catch (error) {
      console.error('Booking error:', error);
      toast.error('Failed to book appointment. Please try again.');
    }
  };

  const nextStep = () => {
    if (step === 1 && !bookingData.service) {
      toast.error('Please select a service');
      return;
    }
    if (step === 2 && (!bookingData.date || !bookingData.time)) {
      toast.error('Please select date and time');
      return;
    }
    setStep(step + 1);
  };

  const prevStep = () => setStep(step - 1);

  const selectedService = services.find(s => s.id === bookingData.service);

  return (
    <section id="booking" className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-dark-900 dark:to-dark-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 scroll-animate">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-accent-500 to-primary-600 rounded-full mb-4">
            <Calendar className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary-950 dark:text-white mb-4">
            Book a Meeting
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Schedule a free consultation or book a service. We're here to help bring your vision to life.
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-12">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center">
              <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all ${
                step >= s
                  ? 'bg-accent-500 border-accent-500 text-white'
                  : 'bg-white dark:bg-dark-800 border-gray-300 dark:border-dark-600 text-gray-400'
              }`}>
                {step > s ? <Check className="w-5 h-5" /> : s}
              </div>
              {s < 3 && (
                <div className={`w-16 md:w-24 h-1 mx-2 transition-all ${
                  step > s ? 'bg-accent-500' : 'bg-gray-300 dark:bg-dark-600'
                }`} />
              )}
            </div>
          ))}
        </div>

        {/* Booking Form */}
        <div className="bg-white dark:bg-dark-800 rounded-2xl shadow-2xl p-8 md:p-12">
          <form onSubmit={handleSubmit}>
            {/* Step 1: Select Service */}
            {step === 1 && (
              <div className="space-y-6 animate-fade-in">
                <h3 className="text-2xl font-bold text-primary-950 dark:text-white mb-6">
                  Select a Service
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {services.map((service) => (
                    <button
                      key={service.id}
                      type="button"
                      onClick={() => handleInputChange('service', service.id)}
                      className={`p-6 rounded-xl border-2 transition-all text-left ${
                        bookingData.service === service.id
                          ? 'border-accent-500 bg-accent-50 dark:bg-accent-900/20'
                          : 'border-gray-200 dark:border-dark-600 hover:border-accent-300 dark:hover:border-accent-700'
                      }`}
                    >
                      <div className="font-bold text-lg text-primary-950 dark:text-white mb-2">
                        {service.name}
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {service.duration}
                        </span>
                        <span className="font-semibold text-accent-600 dark:text-accent-400">
                          {service.price}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Select Date & Time */}
            {step === 2 && (
              <div className="space-y-6 animate-fade-in">
                <h3 className="text-2xl font-bold text-primary-950 dark:text-white mb-6">
                  Choose Date & Time
                </h3>
                
                {/* Selected Service Summary */}
                {selectedService && (
                  <div className="bg-accent-50 dark:bg-accent-900/20 border border-accent-200 dark:border-accent-800 rounded-lg p-4 mb-6">
                    <div className="font-semibold text-accent-900 dark:text-accent-100">
                      {selectedService.name}
                    </div>
                    <div className="text-sm text-accent-700 dark:text-accent-300 mt-1">
                      {selectedService.duration} • {selectedService.price}
                    </div>
                  </div>
                )}

                {/* Date Picker */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Select Date
                  </label>
                  <input
                    type="date"
                    value={bookingData.date}
                    onChange={(e) => handleInputChange('date', e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 border-2 border-gray-300 dark:border-dark-600 dark:bg-dark-700 dark:text-white rounded-lg focus:border-accent-500 focus:ring-2 focus:ring-accent-200 dark:focus:ring-accent-800 outline-none transition-all"
                    required
                  />
                </div>

                {/* Time Slots */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Select Time
                  </label>
                  <div className="grid grid-cols-4 gap-3">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => handleInputChange('time', time)}
                        className={`p-3 rounded-lg border-2 transition-all text-sm font-medium ${
                          bookingData.time === time
                            ? 'border-accent-500 bg-accent-500 text-white'
                            : 'border-gray-200 dark:border-dark-600 text-gray-700 dark:text-gray-300 hover:border-accent-300 dark:hover:border-accent-700'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Contact Information */}
            {step === 3 && (
              <div className="space-y-6 animate-fade-in">
                <h3 className="text-2xl font-bold text-primary-950 dark:text-white mb-6">
                  Your Information
                </h3>

                {/* Booking Summary */}
                <div className="bg-accent-50 dark:bg-accent-900/20 border border-accent-200 dark:border-accent-800 rounded-lg p-4 mb-6">
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <div className="text-accent-700 dark:text-accent-300 font-medium">Service</div>
                      <div className="text-accent-900 dark:text-accent-100 font-semibold">{selectedService?.name}</div>
                    </div>
                    <div>
                      <div className="text-accent-700 dark:text-accent-300 font-medium">Date</div>
                      <div className="text-accent-900 dark:text-accent-100 font-semibold">
                        {new Date(bookingData.date).toLocaleDateString('en-IN', { 
                          weekday: 'short', 
                          year: 'numeric', 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                      </div>
                    </div>
                    <div>
                      <div className="text-accent-700 dark:text-accent-300 font-medium">Time</div>
                      <div className="text-accent-900 dark:text-accent-100 font-semibold">{bookingData.time}</div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      <User className="w-4 h-4 inline mr-1" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={bookingData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-300 dark:border-dark-600 dark:bg-dark-700 dark:text-white rounded-lg focus:border-accent-500 focus:ring-2 focus:ring-accent-200 dark:focus:ring-accent-800 outline-none transition-all"
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      <Mail className="w-4 h-4 inline mr-1" />
                      Email *
                    </label>
                    <input
                      type="email"
                      value={bookingData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-300 dark:border-dark-600 dark:bg-dark-700 dark:text-white rounded-lg focus:border-accent-500 focus:ring-2 focus:ring-accent-200 dark:focus:ring-accent-800 outline-none transition-all"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    <Phone className="w-4 h-4 inline mr-1" />
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={bookingData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-300 dark:border-dark-600 dark:bg-dark-700 dark:text-white rounded-lg focus:border-accent-500 focus:ring-2 focus:ring-accent-200 dark:focus:ring-accent-800 outline-none transition-all"
                    placeholder="+91 98765 43210"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    <MessageSquare className="w-4 h-4 inline mr-1" />
                    Additional Notes (Optional)
                  </label>
                  <textarea
                    value={bookingData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    rows="4"
                    className="w-full px-4 py-3 border-2 border-gray-300 dark:border-dark-600 dark:bg-dark-700 dark:text-white rounded-lg focus:border-accent-500 focus:ring-2 focus:ring-accent-200 dark:focus:ring-accent-800 outline-none transition-all resize-none"
                    placeholder="Tell us about your project or any specific requirements..."
                  />
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200 dark:border-dark-600">
              {step > 1 && (
                <button
                  type="button"
                  onClick={prevStep}
                  className="flex items-center gap-2 px-6 py-3 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  ← Back
                </button>
              )}
              
              {step < 3 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="ml-auto btn-primary"
                >
                  Continue →
                </button>
              ) : (
                <button
                  type="submit"
                  className="ml-auto btn-primary"
                >
                  Confirm Booking
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Info Box */}
        <div className="mt-8 bg-accent-50 dark:bg-accent-900/20 border border-accent-200 dark:border-accent-800 rounded-lg p-6 text-center">
          <p className="text-accent-900 dark:text-accent-100">
            <strong>Note:</strong> You'll receive a confirmation email with meeting details and a calendar invite.
            We'll also send you a reminder 24 hours before your appointment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BookingSystem;
