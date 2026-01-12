import { FileText, Scale, CreditCard, RefreshCw, AlertTriangle, Mail, MapPin } from 'lucide-react';

const TermsOfService = () => {
  const lastUpdated = "January 12, 2026";

  return (
    <section id="terms" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 scroll-animate">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-accent-500 to-primary-600 rounded-full mb-4">
            <Scale className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-950 mb-4">
            Terms of Service
          </h1>
          <p className="text-gray-600">
            Last Updated: {lastUpdated}
          </p>
        </div>

        {/* Content */}
        <div className="bg-gray-50 rounded-2xl shadow-lg p-8 md:p-12 scroll-animate">
          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary-950 mb-4">1. Agreement to Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                By accessing and using the services provided by Shantanu Solutions ("we," "our," or "us"), you agree to be 
                bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            {/* Services */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary-950 mb-4">2. Services Provided</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Shantanu Solutions provides professional web development services, including but not limited to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 ml-4">
                <li>Static website development</li>
                <li>Dynamic website development with CMS</li>
                <li>E-commerce website development</li>
                <li>Website maintenance and support</li>
                <li>SEO optimization services</li>
                <li>Web hosting assistance</li>
              </ul>
            </section>

            {/* Project Process */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary-950 mb-4">3. Project Process</h2>
              
              <h3 className="text-xl font-semibold text-primary-900 mb-3">3.1 Consultation</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We begin with a free consultation to understand your requirements and provide a detailed quote.
              </p>

              <h3 className="text-xl font-semibold text-primary-900 mb-3">3.2 Proposal and Agreement</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Upon agreement, we will provide a detailed project proposal outlining scope, timeline, deliverables, and costs. 
                Work begins only after both parties sign the agreement.
              </p>

              <h3 className="text-xl font-semibold text-primary-900 mb-3">3.3 Development</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We follow an iterative development process with regular updates and milestone reviews. You will have 
                opportunities to provide feedback at each stage.
              </p>

              <h3 className="text-xl font-semibold text-primary-900 mb-3">3.4 Delivery and Launch</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Upon completion and your approval, we will deliver the final product and assist with the launch.
              </p>
            </section>

            {/* Payment Terms */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary-950 mb-4 flex items-center gap-2">
                <CreditCard className="w-6 h-6 text-accent-600" />
                4. Payment Terms
              </h2>
              
              <h3 className="text-xl font-semibold text-primary-900 mb-3">4.1 Payment Structure</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Unless otherwise agreed, payments are structured as follows:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 ml-4">
                <li><strong>50% advance payment</strong> - Due upon signing the agreement</li>
                <li><strong>40% milestone payment</strong> - Due after design approval</li>
                <li><strong>10% final payment</strong> - Due upon project completion and delivery</li>
              </ul>

              <h3 className="text-xl font-semibold text-primary-900 mb-3">4.2 Payment Methods</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We accept payments via bank transfer (NEFT/RTGS/IMPS), UPI, and online payment gateways.
              </p>

              <h3 className="text-xl font-semibold text-primary-900 mb-3">4.3 Late Payments</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Late payments may result in project delays. We reserve the right to pause work until payment is received.
              </p>
            </section>

            {/* Revisions and Changes */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary-950 mb-4 flex items-center gap-2">
                <RefreshCw className="w-6 h-6 text-accent-600" />
                5. Revisions and Changes
              </h2>
              
              <h3 className="text-xl font-semibold text-primary-900 mb-3">5.1 Included Revisions</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Each package includes a specific number of revision rounds as outlined in the project proposal. 
                Revisions must be requested within the agreed timeline.
              </p>

              <h3 className="text-xl font-semibold text-primary-900 mb-3">5.2 Additional Changes</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Changes beyond the agreed scope or additional revision rounds will be quoted separately and require 
                additional payment.
              </p>

              <h3 className="text-xl font-semibold text-primary-900 mb-3">5.3 Major Scope Changes</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Significant changes to project scope may require a revised agreement and timeline.
              </p>
            </section>

            {/* Client Responsibilities */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary-950 mb-4">6. Client Responsibilities</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                To ensure timely project completion, clients are responsible for:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 ml-4">
                <li>Providing all necessary content, images, and materials</li>
                <li>Timely feedback and approvals at each milestone</li>
                <li>Making payments according to the agreed schedule</li>
                <li>Providing access to hosting, domain, and other required services</li>
                <li>Communicating clearly and promptly</li>
              </ul>
            </section>

            {/* Intellectual Property */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary-950 mb-4">7. Intellectual Property</h2>
              
              <h3 className="text-xl font-semibold text-primary-900 mb-3">7.1 Client Content</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                You retain all rights to content you provide (text, images, logos, etc.).
              </p>

              <h3 className="text-xl font-semibold text-primary-900 mb-3">7.2 Developed Work</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Upon full payment, you will own the final delivered website. We retain the right to use the project 
                in our portfolio and marketing materials unless otherwise agreed.
              </p>

              <h3 className="text-xl font-semibold text-primary-900 mb-3">7.3 Third-Party Components</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Some projects may include third-party components (plugins, libraries, frameworks) that are subject to 
                their own licenses.
              </p>
            </section>

            {/* Warranties and Support */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary-950 mb-4">8. Warranties and Support</h2>
              
              <h3 className="text-xl font-semibold text-primary-900 mb-3">8.1 Warranty Period</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We provide a warranty period (30-90 days depending on package) for bug fixes and technical issues 
                related to our work.
              </p>

              <h3 className="text-xl font-semibold text-primary-900 mb-3">8.2 Ongoing Support</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Ongoing maintenance and support are available through our monthly maintenance packages.
              </p>

              <h3 className="text-xl font-semibold text-primary-900 mb-3">8.3 Limitations</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                The warranty does not cover issues caused by third-party modifications, hosting problems, or changes 
                made by the client.
              </p>
            </section>

            {/* Cancellation and Refunds */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary-950 mb-4 flex items-center gap-2">
                <AlertTriangle className="w-6 h-6 text-amber-600" />
                9. Cancellation and Refunds
              </h2>
              
              <h3 className="text-xl font-semibold text-primary-900 mb-3">9.1 Client Cancellation</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you cancel the project:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 ml-4">
                <li>Before work begins: Full refund minus 10% administrative fee</li>
                <li>During development: Payment for completed work, no refund of advance</li>
                <li>After delivery: No refund</li>
              </ul>

              <h3 className="text-xl font-semibold text-primary-900 mb-3">9.2 Our Cancellation</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We reserve the right to cancel a project if:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 ml-4">
                <li>Payment is not received as per schedule</li>
                <li>Client does not provide required materials or feedback</li>
                <li>Project requirements are illegal or unethical</li>
              </ul>
            </section>

            {/* Limitation of Liability */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary-950 mb-4">10. Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                To the maximum extent permitted by law, Shantanu Solutions shall not be liable for any indirect, 
                incidental, special, consequential, or punitive damages, or any loss of profits or revenues.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our total liability shall not exceed the total amount paid by you for the specific service in question.
              </p>
            </section>

            {/* Confidentiality */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary-950 mb-4">11. Confidentiality</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We will keep all client information confidential and will not disclose it to third parties without 
                your consent, except as required by law.
              </p>
            </section>

            {/* Governing Law */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary-950 mb-4">12. Governing Law</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                These Terms of Service shall be governed by and construed in accordance with the laws of India. 
                Any disputes shall be subject to the exclusive jurisdiction of the courts in Gujarat, India.
              </p>
            </section>

            {/* Changes to Terms */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary-950 mb-4">13. Changes to Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon 
                posting on our website. Continued use of our services constitutes acceptance of the modified terms.
              </p>
            </section>

            {/* Contact Information */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary-950 mb-4">14. Contact Us</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-white rounded-lg p-6 space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-accent-600" />
                  <a href="mailto:hitarth0236@gmail.com" className="text-accent-600 hover:text-accent-700">
                    hitarth0236@gmail.com
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-accent-600 mt-1" />
                  <div className="text-gray-700">
                    Shrinagar Society<br />
                    Idar, Gujarat 383430<br />
                    India
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-8">
          <a
            href="#home"
            className="inline-block text-accent-600 hover:text-accent-700 font-semibold"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </section>
  );
};

export default TermsOfService;
