// import { generateMetadata as generateMeta } from "@/lib/seo/metadata";
// import { seoConfig } from "@/lib/seo/config";
// import { Navbar } from "@/components/Navbar";
// import { Footer } from "@/components/Footer";

// export async function generateMetadata() {
//   return generateMeta(seoConfig.baseUrl, {
//     title: "Privacy Policy | Hono Dev Studio",
//     description:
//       "Learn how Hono Dev Studio collects, uses, and protects your personal information. Our comprehensive privacy policy explains our data practices and your rights.",
//     keywords: [
//       "privacy policy",
//       "data protection",
//       "GDPR",
//       "personal information",
//       "web development",
//     ],
//     openGraph: {
//       title: "Privacy Policy | Hono Dev Studio",
//       description:
//         "Learn how Hono Dev Studio collects, uses, and protects your personal information.",
//       type: "website",
//     },
//     twitter: {
//       title: "Privacy Policy | Hono Dev Studio",
//       description:
//         "Learn how Hono Dev Studio collects, uses, and protects your personal information.",
//     },
//     siteName: seoConfig.defaultSiteName,
//     author: seoConfig.defaultAuthor,
//   });
// }

// export default function PrivacyPolicyPage() {
//   return (
//     <div className='min-h-screen bg-gray-950 text-white'>
//       <Navbar />
//       <main className='pt-24 pb-16'>
//         <div className='container mx-auto px-4 max-w-4xl'>
//           <div className='prose prose-invert prose-lg max-w-none'>
//             <h1 className='text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400 mb-8 p-1'>
//               Privacy Policy
//             </h1>

//             <p className='text-gray-300 text-lg mb-8'>
//               <strong>Effective Date:</strong> {new Date().toLocaleDateString()}
//             </p>

//             <div className='space-y-8 text-gray-300'>
//               <section>
//                 <h2 className='text-2xl font-semibold text-white mb-4'>
//                   1. Introduction
//                 </h2>
//                 <p>
//                   Welcome to Hono Dev Studio ("we," "our," or "us"). We are
//                   committed to protecting your privacy and ensuring the security
//                   of your personal information. This Privacy Policy explains how
//                   we collect, use, disclose, and safeguard your information when
//                   you visit our website or use our services.
//                 </p>
//               </section>

//               <section>
//                 <h2 className='text-2xl font-semibold text-white mb-4'>
//                   2. Information We Collect
//                 </h2>

//                 <h3 className='text-xl font-medium text-gray-200 mb-3'>
//                   2.1 Personal Information
//                 </h3>
//                 <p className='mb-4'>
//                   We may collect personal information that you voluntarily
//                   provide to us when you:
//                 </p>
//                 <ul className='list-disc pl-6 mb-4 space-y-2'>
//                   <li>Fill out our contact form</li>
//                   <li>Subscribe to our newsletter</li>
//                   <li>Request a quote or consultation</li>
//                   <li>Communicate with us via email or other channels</li>
//                 </ul>
//                 <p className='mb-4'>This information may include:</p>
//                 <ul className='list-disc pl-6 mb-4 space-y-2'>
//                   <li>Name</li>
//                   <li>Email address</li>
//                   <li>Phone number</li>
//                   <li>Company name</li>
//                   <li>Project details and requirements</li>
//                   <li>Any other information you choose to provide</li>
//                 </ul>

//                 <h3 className='text-xl font-medium text-gray-200 mb-3'>
//                   2.2 Automatically Collected Information
//                 </h3>
//                 <p className='mb-4'>
//                   When you visit our website, we may automatically collect
//                   certain information about your device and usage patterns,
//                   including:
//                 </p>
//                 <ul className='list-disc pl-6 mb-4 space-y-2'>
//                   <li>IP address</li>
//                   <li>Browser type and version</li>
//                   <li>Operating system</li>
//                   <li>Pages visited and time spent on our site</li>
//                   <li>Referring website</li>
//                   <li>Device information</li>
//                 </ul>
//               </section>

//               <section>
//                 <h2 className='text-2xl font-semibold text-white mb-4'>
//                   3. How We Use Your Information
//                 </h2>
//                 <p className='mb-4'>
//                   We use the information we collect for the following purposes:
//                 </p>
//                 <ul className='list-disc pl-6 mb-4 space-y-2'>
//                   <li>
//                     To respond to your inquiries and provide customer support
//                   </li>
//                   <li>To provide, maintain, and improve our services</li>
//                   <li>To process and fulfill your requests</li>
//                   <li>
//                     To send you updates, newsletters, and marketing
//                     communications (with your consent)
//                   </li>
//                   <li>To analyze website usage and improve user experience</li>
//                   <li>To comply with legal obligations</li>
//                   <li>To protect our rights and prevent fraud</li>
//                 </ul>
//               </section>

//               <section>
//                 <h2 className='text-2xl font-semibold text-white mb-4'>
//                   4. Information Sharing and Disclosure
//                 </h2>
//                 <p className='mb-4'>
//                   We do not sell, trade, or rent your personal information to
//                   third parties. We may share your information in the following
//                   circumstances:
//                 </p>
//                 <ul className='list-disc pl-6 mb-4 space-y-2'>
//                   <li>
//                     <strong>Service Providers:</strong> We may share information
//                     with trusted third-party service providers who assist us in
//                     operating our website and conducting our business
//                   </li>
//                   <li>
//                     <strong>Legal Requirements:</strong> We may disclose
//                     information if required by law or in response to valid legal
//                     requests
//                   </li>
//                   <li>
//                     <strong>Business Transfers:</strong> In the event of a
//                     merger, acquisition, or sale of assets, your information may
//                     be transferred
//                   </li>
//                   <li>
//                     <strong>Consent:</strong> We may share information with your
//                     explicit consent
//                   </li>
//                 </ul>
//               </section>

//               <section>
//                 <h2 className='text-2xl font-semibold text-white mb-4'>
//                   5. Data Security
//                 </h2>
//                 <p>
//                   We implement appropriate technical and organizational security
//                   measures to protect your personal information against
//                   unauthorized access, alteration, disclosure, or destruction.
//                   However, no method of transmission over the internet or
//                   electronic storage is 100% secure, and we cannot guarantee
//                   absolute security.
//                 </p>
//               </section>

//               <section>
//                 <h2 className='text-2xl font-semibold text-white mb-4'>
//                   6. Data Retention
//                 </h2>
//                 <p>
//                   We retain your personal information only for as long as
//                   necessary to fulfill the purposes outlined in this Privacy
//                   Policy, unless a longer retention period is required or
//                   permitted by law. When we no longer need your information, we
//                   will securely delete or anonymize it.
//                 </p>
//               </section>

//               <section>
//                 <h2 className='text-2xl font-semibold text-white mb-4'>
//                   7. Your Rights
//                 </h2>
//                 <p className='mb-4'>
//                   Depending on your location, you may have the following rights
//                   regarding your personal information:
//                 </p>
//                 <ul className='list-disc pl-6 mb-4 space-y-2'>
//                   <li>
//                     <strong>Access:</strong> Request access to your personal
//                     information
//                   </li>
//                   <li>
//                     <strong>Correction:</strong> Request correction of
//                     inaccurate or incomplete information
//                   </li>
//                   <li>
//                     <strong>Deletion:</strong> Request deletion of your personal
//                     information
//                   </li>
//                   <li>
//                     <strong>Portability:</strong> Request a copy of your
//                     information in a structured format
//                   </li>
//                   <li>
//                     <strong>Objection:</strong> Object to the processing of your
//                     information
//                   </li>
//                   <li>
//                     <strong>Restriction:</strong> Request restriction of
//                     processing
//                   </li>
//                   <li>
//                     <strong>Withdrawal of Consent:</strong> Withdraw consent for
//                     processing based on consent
//                   </li>
//                 </ul>
//                 <p>
//                   To exercise these rights, please contact us using the
//                   information provided below.
//                 </p>
//               </section>

//               <section>
//                 <h2 className='text-2xl font-semibold text-white mb-4'>
//                   8. Cookies and Tracking Technologies
//                 </h2>
//                 <p className='mb-4'>
//                   Our website may use cookies and similar tracking technologies
//                   to enhance your browsing experience. Cookies are small data
//                   files stored on your device. You can control cookie settings
//                   through your browser preferences.
//                 </p>
//                 <p>We may use the following types of cookies:</p>
//                 <ul className='list-disc pl-6 mb-4 space-y-2'>
//                   <li>
//                     <strong>Essential Cookies:</strong> Necessary for website
//                     functionality
//                   </li>
//                   <li>
//                     <strong>Analytics Cookies:</strong> Help us understand how
//                     visitors use our site
//                   </li>
//                   <li>
//                     <strong>Preference Cookies:</strong> Remember your settings
//                     and preferences
//                   </li>
//                 </ul>
//               </section>

//               <section>
//                 <h2 className='text-2xl font-semibold text-white mb-4'>
//                   9. Third-Party Links
//                 </h2>
//                 <p>
//                   Our website may contain links to third-party websites. We are
//                   not responsible for the privacy practices or content of these
//                   external sites. We encourage you to review the privacy
//                   policies of any third-party sites you visit.
//                 </p>
//               </section>

//               <section>
//                 <h2 className='text-2xl font-semibold text-white mb-4'>
//                   10. Children's Privacy
//                 </h2>
//                 <p>
//                   Our services are not intended for children under the age of
//                   13. We do not knowingly collect personal information from
//                   children under 13. If we become aware that we have collected
//                   such information, we will take steps to delete it promptly.
//                 </p>
//               </section>

//               <section>
//                 <h2 className='text-2xl font-semibold text-white mb-4'>
//                   11. International Data Transfers
//                 </h2>
//                 <p>
//                   Your information may be transferred to and processed in
//                   countries other than your own. We ensure that such transfers
//                   comply with applicable data protection laws and implement
//                   appropriate safeguards to protect your information.
//                 </p>
//               </section>

//               <section>
//                 <h2 className='text-2xl font-semibold text-white mb-4'>
//                   12. Changes to This Privacy Policy
//                 </h2>
//                 <p>
//                   We may update this Privacy Policy from time to time to reflect
//                   changes in our practices or applicable laws. We will notify
//                   you of any material changes by posting the updated policy on
//                   our website and updating the effective date. Your continued
//                   use of our services after such changes constitutes acceptance
//                   of the updated policy.
//                 </p>
//               </section>

//               <section>
//                 <h2 className='text-2xl font-semibold text-white mb-4'>
//                   13. Contact Us
//                 </h2>
//                 <p className='mb-4'>
//                   If you have any questions, concerns, or requests regarding
//                   this Privacy Policy or our data practices, please contact us:
//                 </p>
//                 <div className='bg-gray-800/50 p-6 rounded-lg border border-gray-700'>
//                   <p>
//                     <strong>Hono Dev Studio</strong>
//                   </p>
//                   <p>Email: privacy@honodev.studio</p>
//                   <p>Address: 123 Innovation Drive, San Francisco, CA 94105</p>
//                   <p>Phone: +1 (415) 555-0123</p>
//                 </div>
//               </section>

//               <section className='border-t border-gray-700 pt-8'>
//                 <p className='text-sm text-gray-400'>
//                   This Privacy Policy was last updated on{" "}
//                   {new Date().toLocaleDateString()}. We recommend reviewing this
//                   policy periodically to stay informed about how we protect your
//                   information.
//                 </p>
//               </section>
//             </div>
//           </div>
//         </div>
//       </main>
//       <Footer />
//     </div>
//   );
// }

import React from "react";
import { generateMetadata as generateMeta } from "@/lib/seo/metadata";
import { seoConfig } from "@/lib/seo/config";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return generateMeta(seoConfig.baseUrl, {
    title: "Privacy Policy | Hono Dev Studio",
    description:
      "Learn how Hono Dev Studio collects, uses, and protects your personal information. Our comprehensive privacy policy explains our data practices and your rights.",
    keywords: [
      "privacy policy",
      "data protection",
      "GDPR",
      "personal information",
      "web development",
    ],
  });
}

export default function PrivacyPolicyPage(): React.JSX.Element {
  const currentDate = new Date().toLocaleDateString();

  return (
    <div className='min-h-screen bg-gray-950 text-white'>
      <Navbar />
      <main className='pt-24 pb-16'>
        <div className='container mx-auto px-4 max-w-4xl'>
          <div className='prose prose-invert prose-lg max-w-none'>
            <h1 className='text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400 mb-8 p-1'>
              Privacy Policy
            </h1>

            <p className='text-gray-300 text-lg mb-8'>
              <strong>Effective Date:</strong> {currentDate}
            </p>

            <div className='space-y-8 text-gray-300'>
              <section>
                <h2 className='text-2xl font-semibold text-white mb-4'>
                  1. Introduction
                </h2>
                <p>
                  Welcome to Hono Dev Studio (&quot;we,&quot; &quot;our,&quot;
                  or &quot;us&quot;). We are committed to protecting your
                  privacy and ensuring the security of your personal
                  information. This Privacy Policy explains how we collect, use,
                  disclose, and safeguard your information when you visit our
                  website or use our services.
                </p>
              </section>

              <section>
                <h2 className='text-2xl font-semibold text-white mb-4'>
                  2. Information We Collect
                </h2>

                <h3 className='text-xl font-medium text-gray-200 mb-3'>
                  2.1 Personal Information
                </h3>
                <p className='mb-4'>
                  We may collect personal information that you voluntarily
                  provide to us when you:
                </p>
                <ul className='list-disc pl-6 mb-4 space-y-2'>
                  <li>Fill out our contact form</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Request a quote or consultation</li>
                  <li>Communicate with us via email or other channels</li>
                </ul>
                <p className='mb-4'>This information may include:</p>
                <ul className='list-disc pl-6 mb-4 space-y-2'>
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Company name</li>
                  <li>Project details and requirements</li>
                  <li>Any other information you choose to provide</li>
                </ul>

                <h3 className='text-xl font-medium text-gray-200 mb-3'>
                  2.2 Automatically Collected Information
                </h3>
                <p className='mb-4'>
                  When you visit our website, we may automatically collect
                  certain information about your device and usage patterns,
                  including:
                </p>
                <ul className='list-disc pl-6 mb-4 space-y-2'>
                  <li>IP address</li>
                  <li>Browser type and version</li>
                  <li>Operating system</li>
                  <li>Pages visited and time spent on our site</li>
                  <li>Referring website</li>
                  <li>Device information</li>
                </ul>
              </section>

              <section>
                <h2 className='text-2xl font-semibold text-white mb-4'>
                  3. How We Use Your Information
                </h2>
                <p className='mb-4'>
                  We use the information we collect for the following purposes:
                </p>
                <ul className='list-disc pl-6 mb-4 space-y-2'>
                  <li>
                    To respond to your inquiries and provide customer support
                  </li>
                  <li>To provide, maintain, and improve our services</li>
                  <li>To process and fulfill your requests</li>
                  <li>
                    To send you updates, newsletters, and marketing
                    communications (with your consent)
                  </li>
                  <li>To analyze website usage and improve user experience</li>
                  <li>To comply with legal obligations</li>
                  <li>To protect our rights and prevent fraud</li>
                </ul>
              </section>

              <section>
                <h2 className='text-2xl font-semibold text-white mb-4'>
                  4. Information Sharing and Disclosure
                </h2>
                <p className='mb-4'>
                  We do not sell, trade, or rent your personal information to
                  third parties. We may share your information in the following
                  circumstances:
                </p>
                <ul className='list-disc pl-6 mb-4 space-y-2'>
                  <li>
                    <strong>Service Providers:</strong> We may share information
                    with trusted third-party service providers who assist us in
                    operating our website and conducting our business
                  </li>
                  <li>
                    <strong>Legal Requirements:</strong> We may disclose
                    information if required by law or in response to valid legal
                    requests
                  </li>
                  <li>
                    <strong>Business Transfers:</strong> In the event of a
                    merger, acquisition, or sale of assets, your information may
                    be transferred
                  </li>
                  <li>
                    <strong>Consent:</strong> We may share information with your
                    explicit consent
                  </li>
                </ul>
              </section>

              <section>
                <h2 className='text-2xl font-semibold text-white mb-4'>
                  5. Data Security
                </h2>
                <p>
                  We implement appropriate technical and organizational security
                  measures to protect your personal information against
                  unauthorized access, alteration, disclosure, or destruction.
                  However, no method of transmission over the internet or
                  electronic storage is 100% secure, and we cannot guarantee
                  absolute security.
                </p>
              </section>

              <section>
                <h2 className='text-2xl font-semibold text-white mb-4'>
                  6. Data Retention
                </h2>
                <p>
                  We retain your personal information only for as long as
                  necessary to fulfill the purposes outlined in this Privacy
                  Policy, unless a longer retention period is required or
                  permitted by law. When we no longer need your information, we
                  will securely delete or anonymize it.
                </p>
              </section>

              <section>
                <h2 className='text-2xl font-semibold text-white mb-4'>
                  7. Your Rights
                </h2>
                <p className='mb-4'>
                  Depending on your location, you may have the following rights
                  regarding your personal information:
                </p>
                <ul className='list-disc pl-6 mb-4 space-y-2'>
                  <li>
                    <strong>Access:</strong> Request access to your personal
                    information
                  </li>
                  <li>
                    <strong>Correction:</strong> Request correction of
                    inaccurate or incomplete information
                  </li>
                  <li>
                    <strong>Deletion:</strong> Request deletion of your personal
                    information
                  </li>
                  <li>
                    <strong>Portability:</strong> Request a copy of your
                    information in a structured format
                  </li>
                  <li>
                    <strong>Objection:</strong> Object to the processing of your
                    information
                  </li>
                  <li>
                    <strong>Restriction:</strong> Request restriction of
                    processing
                  </li>
                  <li>
                    <strong>Withdrawal of Consent:</strong> Withdraw consent for
                    processing based on consent
                  </li>
                </ul>
                <p>
                  To exercise these rights, please contact us using the
                  information provided below.
                </p>
              </section>

              <section>
                <h2 className='text-2xl font-semibold text-white mb-4'>
                  8. Cookies and Tracking Technologies
                </h2>
                <p className='mb-4'>
                  Our website may use cookies and similar tracking technologies
                  to enhance your browsing experience. Cookies are small data
                  files stored on your device. You can control cookie settings
                  through your browser preferences.
                </p>
                <p>We may use the following types of cookies:</p>
                <ul className='list-disc pl-6 mb-4 space-y-2'>
                  <li>
                    <strong>Essential Cookies:</strong> Necessary for website
                    functionality
                  </li>
                  <li>
                    <strong>Analytics Cookies:</strong> Help us understand how
                    visitors use our site
                  </li>
                  <li>
                    <strong>Preference Cookies:</strong> Remember your settings
                    and preferences
                  </li>
                </ul>
              </section>

              <section>
                <h2 className='text-2xl font-semibold text-white mb-4'>
                  9. Third-Party Links
                </h2>
                <p>
                  Our website may contain links to third-party websites. We are
                  not responsible for the privacy practices or content of these
                  external sites. We encourage you to review the privacy
                  policies of any third-party sites you visit.
                </p>
              </section>

              <section>
                <h2 className='text-2xl font-semibold text-white mb-4'>
                  10. Children&apos;s Privacy
                </h2>
                <p>
                  Our services are not intended for children under the age of
                  13. We do not knowingly collect personal information from
                  children under 13. If we become aware that we have collected
                  such information, we will take steps to delete it promptly.
                </p>
              </section>

              <section>
                <h2 className='text-2xl font-semibold text-white mb-4'>
                  11. International Data Transfers
                </h2>
                <p>
                  Your information may be transferred to and processed in
                  countries other than your own. We ensure that such transfers
                  comply with applicable data protection laws and implement
                  appropriate safeguards to protect your information.
                </p>
              </section>

              <section>
                <h2 className='text-2xl font-semibold text-white mb-4'>
                  12. Changes to This Privacy Policy
                </h2>
                <p>
                  We may update this Privacy Policy from time to time to reflect
                  changes in our practices or applicable laws. We will notify
                  you of any material changes by posting the updated policy on
                  our website and updating the effective date. Your continued
                  use of our services after such changes constitutes acceptance
                  of the updated policy.
                </p>
              </section>

              <section>
                <h2 className='text-2xl font-semibold text-white mb-4'>
                  13. Contact Us
                </h2>
                <p className='mb-4'>
                  If you have any questions, concerns, or requests regarding
                  this Privacy Policy or our data practices, please contact us:
                </p>
                <div className='bg-gray-800/50 p-6 rounded-lg border border-gray-700'>
                  <p>
                    <strong>Hono Dev Studio</strong>
                  </p>
                  <p>Email: privacy@honodev.studio</p>
                  <p>Address: 123 Innovation Drive, San Francisco, CA 94105</p>
                  <p>Phone: +1 (415) 555-0123</p>
                </div>
              </section>

              <section className='border-t border-gray-700 pt-8'>
                <p className='text-sm text-gray-400'>
                  This Privacy Policy was last updated on {currentDate}. We
                  recommend reviewing this policy periodically to stay informed
                  about how we protect your information.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
