// // "use client";

// // import React, { useState } from "react";
// // import { useForm } from "react-hook-form";
// // import { zodResolver } from "@hookform/resolvers/zod";
// // import { motion, AnimatePresence } from "framer-motion";
// // import {
// //   Mail,
// //   Phone,
// //   MapPin,
// //   Send,
// //   CheckCircle,
// //   AlertCircle,
// //   Loader2,
// //   User,
// //   Building,
// //   MessageSquare,
// //   FileText,
// // } from "lucide-react";

// // import {
// //   contactFormSchema,
// //   type ContactFormData,
// // } from "@/lib/validations/contact";
// // import { Navbar } from "@/components/Navbar";
// // import { Footer } from "@/components/Footer";
// // import { Button } from "@/components/ui/button";
// // import { Input } from "@/components/ui/input";
// // import { Textarea } from "@/components/ui/textarea";
// // import { Label } from "@/components/ui/label";

// // interface FormStatus {
// //   type: "success" | "error" | null;
// //   message: string;
// // }

// // export default function ContactPage() {
// //   const [isSubmitting, setIsSubmitting] = useState(false);
// //   const [formStatus, setFormStatus] = useState<FormStatus>({
// //     type: null,
// //     message: "",
// //   });

// //   const {
// //     register,
// //     handleSubmit,
// //     formState: { errors },
// //     reset,
// //     watch,
// //   } = useForm<ContactFormData>({
// //     resolver: zodResolver(contactFormSchema),
// //     mode: "onBlur",
// //   });

// //   const watchedFields = watch();

// //   const onSubmit = async (data: ContactFormData) => {
// //     setIsSubmitting(true);
// //     setFormStatus({ type: null, message: "" });

// //     try {
// //       const response = await fetch("/api/contact", {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json",
// //         },
// //         body: JSON.stringify({
// //           ...data,
// //           honeypot: "", // Honeypot field for spam protection
// //         }),
// //       });

// //       const result = await response.json();

// //       if (result.success) {
// //         setFormStatus({
// //           type: "success",
// //           message:
// //             result.message ||
// //             "Message sent successfully! We will get back to you soon.",
// //         });
// //         reset();
// //       } else {
// //         setFormStatus({
// //           type: "error",
// //           message: result.error || "Failed to send message. Please try again.",
// //         });
// //       }
// //     } catch (error) {
// //       setFormStatus({
// //         type: "error",
// //         message: "Network error. Please check your connection and try again.",
// //       });
// //     } finally {
// //       setIsSubmitting(false);
// //     }
// //   };

// //   const contactInfo = [
// //     {
// //       icon: Mail,
// //       label: "Email",
// //       value: "hello@honodev.studio",
// //       href: "mailto:hello@honodev.studio",
// //     },
// //     {
// //       icon: Phone,
// //       label: "Phone",
// //       value: "+1 (415) 555-0123",
// //       href: "tel:+14155550123",
// //     },
// //     {
// //       icon: MapPin,
// //       label: "Address",
// //       value: "123 Innovation Drive, San Francisco, CA 94105",
// //       href: "https://maps.google.com/?q=123+Innovation+Drive,+San+Francisco,+CA+94105",
// //     },
// //   ];

// //   return (
// //     <div className='min-h-screen bg-gray-950 text-white'>
// //       <Navbar />

// //       <main className='pt-24 pb-16'>
// //         <div className='container mx-auto px-4 max-w-6xl'>
// //           {/* Header */}
// //           <motion.div
// //             initial={{ opacity: 0, y: 20 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.6 }}
// //             className='text-center mb-16'
// //           >
// //             <h1 className='text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400 mb-6 p-1'>
// //               Let's Build Something Amazing
// //             </h1>
// //             <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
// //               Ready to transform your ideas into exceptional digital
// //               experiences? Get in touch and let's discuss how we can help bring
// //               your vision to life.
// //             </p>
// //           </motion.div>

// //           <div className='grid lg:grid-cols-2 gap-16'>
// //             {/* Contact Form */}
// //             <motion.div
// //               initial={{ opacity: 0, x: -20 }}
// //               animate={{ opacity: 1, x: 0 }}
// //               transition={{ duration: 0.6, delay: 0.2 }}
// //               className='space-y-8'
// //             >
// //               <div>
// //                 <h2 className='text-3xl font-bold text-white mb-4'>
// //                   Send us a message
// //                 </h2>
// //                 <p className='text-gray-400'>
// //                   Fill out the form below and we'll get back to you within 24
// //                   hours.
// //                 </p>
// //               </div>

// //               {/* Status Messages */}
// //               <AnimatePresence>
// //                 {formStatus.type && (
// //                   <motion.div
// //                     initial={{ opacity: 0, y: -10 }}
// //                     animate={{ opacity: 1, y: 0 }}
// //                     exit={{ opacity: 0, y: -10 }}
// //                     className={`p-4 rounded-lg border flex items-center gap-3 ${
// //                       formStatus.type === "success"
// //                         ? "bg-green-900/20 border-green-500/30 text-green-400"
// //                         : "bg-red-900/20 border-red-500/30 text-red-400"
// //                     }`}
// //                   >
// //                     {formStatus.type === "success" ? (
// //                       <CheckCircle className='h-5 w-5 flex-shrink-0' />
// //                     ) : (
// //                       <AlertCircle className='h-5 w-5 flex-shrink-0' />
// //                     )}
// //                     <p>{formStatus.message}</p>
// //                   </motion.div>
// //                 )}
// //               </AnimatePresence>

// //               <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
// //                 {/* Name Field */}
// //                 <div className='space-y-2'>
// //                   <Label htmlFor='name' className='flex items-center gap-2'>
// //                     <User className='h-4 w-4' />
// //                     Name *
// //                   </Label>
// //                   <Input
// //                     id='name'
// //                     {...register("name")}
// //                     placeholder='Your full name'
// //                     className={errors.name ? "border-red-500" : ""}
// //                   />
// //                   {errors.name && (
// //                     <p className='text-red-400 text-sm'>
// //                       {errors.name.message}
// //                     </p>
// //                   )}
// //                 </div>

// //                 {/* Email Field */}
// //                 <div className='space-y-2'>
// //                   <Label htmlFor='email' className='flex items-center gap-2'>
// //                     <Mail className='h-4 w-4' />
// //                     Email *
// //                   </Label>
// //                   <Input
// //                     id='email'
// //                     type='email'
// //                     {...register("email")}
// //                     placeholder='your.email@example.com'
// //                     className={errors.email ? "border-red-500" : ""}
// //                   />
// //                   {errors.email && (
// //                     <p className='text-red-400 text-sm'>
// //                       {errors.email.message}
// //                     </p>
// //                   )}
// //                 </div>

// //                 {/* Company Field (Optional) */}
// //                 <div className='space-y-2'>
// //                   <Label htmlFor='company' className='flex items-center gap-2'>
// //                     <Building className='h-4 w-4' />
// //                     Company
// //                   </Label>
// //                   <Input
// //                     id='company'
// //                     {...register("company")}
// //                     placeholder='Your company name (optional)'
// //                     className={errors.company ? "border-red-500" : ""}
// //                   />
// //                   {errors.company && (
// //                     <p className='text-red-400 text-sm'>
// //                       {errors.company.message}
// //                     </p>
// //                   )}
// //                 </div>

// //                 {/* Phone Field (Optional) */}
// //                 <div className='space-y-2'>
// //                   <Label htmlFor='phone' className='flex items-center gap-2'>
// //                     <Phone className='h-4 w-4' />
// //                     Phone
// //                   </Label>
// //                   <Input
// //                     id='phone'
// //                     type='tel'
// //                     {...register("phone")}
// //                     placeholder='+1 (555) 123-4567 (optional)'
// //                     className={errors.phone ? "border-red-500" : ""}
// //                   />
// //                   {errors.phone && (
// //                     <p className='text-red-400 text-sm'>
// //                       {errors.phone.message}
// //                     </p>
// //                   )}
// //                 </div>

// //                 {/* Subject Field */}
// //                 <div className='space-y-2'>
// //                   <Label htmlFor='subject' className='flex items-center gap-2'>
// //                     <FileText className='h-4 w-4' />
// //                     Subject *
// //                   </Label>
// //                   <Input
// //                     id='subject'
// //                     {...register("subject")}
// //                     placeholder="What's this about?"
// //                     className={errors.subject ? "border-red-500" : ""}
// //                   />
// //                   {errors.subject && (
// //                     <p className='text-red-400 text-sm'>
// //                       {errors.subject.message}
// //                     </p>
// //                   )}
// //                 </div>

// //                 {/* Message Field */}
// //                 <div className='space-y-2'>
// //                   <Label htmlFor='message' className='flex items-center gap-2'>
// //                     <MessageSquare className='h-4 w-4' />
// //                     Message *
// //                   </Label>
// //                   <Textarea
// //                     id='message'
// //                     {...register("message")}
// //                     placeholder='Tell us about your project, goals, timeline, or any questions you have...'
// //                     rows={6}
// //                     className={errors.message ? "border-red-500" : ""}
// //                   />
// //                   {errors.message && (
// //                     <p className='text-red-400 text-sm'>
// //                       {errors.message.message}
// //                     </p>
// //                   )}
// //                   <p className='text-gray-500 text-sm'>
// //                     {watchedFields.message?.length || 0}/1000 characters
// //                   </p>
// //                 </div>

// //                 {/* Submit Button */}
// //                 <Button
// //                   type='submit'
// //                   disabled={isSubmitting}
// //                   className='w-full h-12 text-lg font-semibold bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 transition-all duration-300'
// //                 >
// //                   {isSubmitting ? (
// //                     <>
// //                       <Loader2 className='h-5 w-5 mr-2 animate-spin' />
// //                       Sending...
// //                     </>
// //                   ) : (
// //                     <>
// //                       <Send className='h-5 w-5 mr-2' />
// //                       Send Message
// //                     </>
// //                   )}
// //                 </Button>
// //               </form>
// //             </motion.div>

// //             {/* Contact Information */}
// //             <motion.div
// //               initial={{ opacity: 0, x: 20 }}
// //               animate={{ opacity: 1, x: 0 }}
// //               transition={{ duration: 0.6, delay: 0.4 }}
// //               className='space-y-8'
// //             >
// //               <div>
// //                 <h2 className='text-3xl font-bold text-white mb-4'>
// //                   Get in touch
// //                 </h2>
// //                 <p className='text-gray-400'>
// //                   Prefer to reach out directly? Here are all the ways you can
// //                   contact us.
// //                 </p>
// //               </div>

// //               <div className='space-y-6'>
// //                 {contactInfo.map((item, index) => (
// //                   <motion.a
// //                     key={item.label}
// //                     href={item.href}
// //                     target={item.label === "Address" ? "_blank" : undefined}
// //                     rel={
// //                       item.label === "Address"
// //                         ? "noopener noreferrer"
// //                         : undefined
// //                     }
// //                     initial={{ opacity: 0, y: 20 }}
// //                     animate={{ opacity: 1, y: 0 }}
// //                     transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
// //                     className='flex items-start gap-4 p-6 bg-gray-800/30 border border-gray-700/50 rounded-xl hover:bg-gray-800/50 hover:border-gray-600/50 transition-all duration-300 group'
// //                   >
// //                     <div className='p-3 bg-violet-600/20 rounded-lg group-hover:bg-violet-600/30 transition-colors'>
// //                       <item.icon className='h-6 w-6 text-violet-400' />
// //                     </div>
// //                     <div>
// //                       <h3 className='font-semibold text-white mb-1'>
// //                         {item.label}
// //                       </h3>
// //                       <p className='text-gray-300 group-hover:text-white transition-colors'>
// //                         {item.value}
// //                       </p>
// //                     </div>
// //                   </motion.a>
// //                 ))}
// //               </div>

// //               {/* Additional Info */}
// //               <motion.div
// //                 initial={{ opacity: 0, y: 20 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 transition={{ duration: 0.6, delay: 0.9 }}
// //                 className='p-6 bg-gradient-to-br from-violet-900/20 to-purple-900/20 border border-violet-500/20 rounded-xl'
// //               >
// //                 <h3 className='font-semibold text-white mb-3'>Response Time</h3>
// //                 <p className='text-gray-300 mb-4'>
// //                   We typically respond to all inquiries within 24 hours during
// //                   business days. For urgent matters, please call us directly.
// //                 </p>
// //                 <div className='flex items-center gap-2 text-sm text-violet-400'>
// //                   <CheckCircle className='h-4 w-4' />
// //                   <span>Business Hours: Mon-Fri, 9AM-6PM PST</span>
// //                 </div>
// //               </motion.div>
// //             </motion.div>
// //           </div>
// //         </div>
// //       </main>

// //       <Footer />
// //     </div>
// //   );
// // }

// "use client";

// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Mail,
//   Phone,
//   MapPin,
//   Send,
//   CheckCircle,
//   AlertCircle,
//   Loader2,
//   User,
//   Building,
//   MessageSquare,
//   FileText,
//   ArrowLeft,
//   Home,
// } from "lucide-react";

// import {
//   contactFormSchema,
//   type ContactFormData,
// } from "@/lib/validations/contact";
// import { Footer } from "@/components/Footer";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Label } from "@/components/ui/label";

// interface FormStatus {
//   type: "success" | "error" | null;
//   message: string;
// }

// export default function ContactPage() {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [formStatus, setFormStatus] = useState<FormStatus>({
//     type: null,
//     message: "",
//   });

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset,
//     watch,
//   } = useForm<ContactFormData>({
//     resolver: zodResolver(contactFormSchema),
//     mode: "onBlur",
//   });

//   const watchedFields = watch();

//   const onSubmit = async (data: ContactFormData) => {
//     setIsSubmitting(true);
//     setFormStatus({ type: null, message: "" });

//     try {
//       const response = await fetch("/api/contact", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           ...data,
//           honeypot: "", // Honeypot field for spam protection
//         }),
//       });

//       const result = await response.json();

//       if (result.success) {
//         setFormStatus({
//           type: "success",
//           message:
//             result.message ||
//             "Message sent successfully! We will get back to you soon.",
//         });
//         reset();
//       } else {
//         setFormStatus({
//           type: "error",
//           message: result.error || "Failed to send message. Please try again.",
//         });
//       }
//     } catch (error) {
//       setFormStatus({
//         type: "error",
//         message: "Network error. Please check your connection and try again.",
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const contactInfo = [
//     {
//       icon: Mail,
//       label: "Email",
//       value: "hello@honodev.studio",
//       href: "mailto:hello@honodev.studio",
//     },
//     {
//       icon: Phone,
//       label: "Phone",
//       value: "+1 (415) 555-0123",
//       href: "tel:+14155550123",
//     },
//     {
//       icon: MapPin,
//       label: "Address",
//       value: "123 Innovation Drive, San Francisco, CA 94105",
//       href: "https://maps.google.com/?q=123+Innovation+Drive,+San+Francisco,+CA+94105",
//     },
//   ];

//   return (
//     <div className='min-h-screen bg-gray-950 text-white'>
//       {/* Back to Home Button */}
//       <motion.div
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className='fixed top-6 left-6 z-50'
//       >
//         <Button
//           variant='outline'
//           size='sm'
//           className='bg-gray-900/80 backdrop-blur-sm border-gray-700 hover:bg-gray-800 hover:border-gray-600 text-gray-300 hover:text-white transition-all duration-300'
//           onClick={() => window.history.back()}
//         >
//           <ArrowLeft className='h-4 w-4 mr-2' />
//           Back to Home
//         </Button>
//       </motion.div>

//       <main className='pt-24 pb-16'>
//         <div className='container mx-auto px-4 max-w-6xl'>
//           {/* Header */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className='text-center mb-16'
//           >
//             <h1 className='text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400 mb-6 p-1'>
//               Let's Build Something Amazing
//             </h1>
//             <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
//               Ready to transform your ideas into exceptional digital
//               experiences? Get in touch and let's discuss how we can help bring
//               your vision to life.
//             </p>
//           </motion.div>

//           <div className='grid lg:grid-cols-2 gap-16'>
//             {/* Contact Form */}
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               className='space-y-8'
//             >
//               <div>
//                 <h2 className='text-3xl font-bold text-white mb-4'>
//                   Send us a message
//                 </h2>
//                 <p className='text-gray-400'>
//                   Fill out the form below and we'll get back to you within 24
//                   hours.
//                 </p>
//               </div>

//               {/* Status Messages */}
//               <AnimatePresence>
//                 {formStatus.type && (
//                   <motion.div
//                     initial={{ opacity: 0, y: -10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: -10 }}
//                     className={`p-4 rounded-lg border flex items-center gap-3 ${
//                       formStatus.type === "success"
//                         ? "bg-green-900/20 border-green-500/30 text-green-400"
//                         : "bg-red-900/20 border-red-500/30 text-red-400"
//                     }`}
//                   >
//                     {formStatus.type === "success" ? (
//                       <CheckCircle className='h-5 w-5 flex-shrink-0' />
//                     ) : (
//                       <AlertCircle className='h-5 w-5 flex-shrink-0' />
//                     )}
//                     <p>{formStatus.message}</p>
//                   </motion.div>
//                 )}
//               </AnimatePresence>

//               <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
//                 {/* Name Field */}
//                 <div className='space-y-2'>
//                   <Label htmlFor='name' className='flex items-center gap-2'>
//                     <User className='h-4 w-4' />
//                     Name *
//                   </Label>
//                   <Input
//                     id='name'
//                     {...register("name")}
//                     placeholder='Your full name'
//                     className={errors.name ? "border-red-500" : ""}
//                   />
//                   {errors.name && (
//                     <p className='text-red-400 text-sm'>
//                       {errors.name.message}
//                     </p>
//                   )}
//                 </div>

//                 {/* Email Field */}
//                 <div className='space-y-2'>
//                   <Label htmlFor='email' className='flex items-center gap-2'>
//                     <Mail className='h-4 w-4' />
//                     Email *
//                   </Label>
//                   <Input
//                     id='email'
//                     type='email'
//                     {...register("email")}
//                     placeholder='your.email@example.com'
//                     className={errors.email ? "border-red-500" : ""}
//                   />
//                   {errors.email && (
//                     <p className='text-red-400 text-sm'>
//                       {errors.email.message}
//                     </p>
//                   )}
//                 </div>

//                 {/* Company Field (Optional) */}
//                 <div className='space-y-2'>
//                   <Label htmlFor='company' className='flex items-center gap-2'>
//                     <Building className='h-4 w-4' />
//                     Company
//                   </Label>
//                   <Input
//                     id='company'
//                     {...register("company")}
//                     placeholder='Your company name (optional)'
//                     className={errors.company ? "border-red-500" : ""}
//                   />
//                   {errors.company && (
//                     <p className='text-red-400 text-sm'>
//                       {errors.company.message}
//                     </p>
//                   )}
//                 </div>

//                 {/* Phone Field (Optional) */}
//                 <div className='space-y-2'>
//                   <Label htmlFor='phone' className='flex items-center gap-2'>
//                     <Phone className='h-4 w-4' />
//                     Phone
//                   </Label>
//                   <Input
//                     id='phone'
//                     type='tel'
//                     {...register("phone")}
//                     placeholder='+1 (555) 123-4567 (optional)'
//                     className={errors.phone ? "border-red-500" : ""}
//                   />
//                   {errors.phone && (
//                     <p className='text-red-400 text-sm'>
//                       {errors.phone.message}
//                     </p>
//                   )}
//                 </div>

//                 {/* Subject Field */}
//                 <div className='space-y-2'>
//                   <Label htmlFor='subject' className='flex items-center gap-2'>
//                     <FileText className='h-4 w-4' />
//                     Subject *
//                   </Label>
//                   <Input
//                     id='subject'
//                     {...register("subject")}
//                     placeholder="What's this about?"
//                     className={errors.subject ? "border-red-500" : ""}
//                   />
//                   {errors.subject && (
//                     <p className='text-red-400 text-sm'>
//                       {errors.subject.message}
//                     </p>
//                   )}
//                 </div>

//                 {/* Message Field */}
//                 <div className='space-y-2'>
//                   <Label htmlFor='message' className='flex items-center gap-2'>
//                     <MessageSquare className='h-4 w-4' />
//                     Message *
//                   </Label>
//                   <Textarea
//                     id='message'
//                     {...register("message")}
//                     placeholder='Tell us about your project, goals, timeline, or any questions you have...'
//                     rows={6}
//                     className={errors.message ? "border-red-500" : ""}
//                   />
//                   {errors.message && (
//                     <p className='text-red-400 text-sm'>
//                       {errors.message.message}
//                     </p>
//                   )}
//                   <p className='text-gray-500 text-sm'>
//                     {watchedFields.message?.length || 0}/1000 characters
//                   </p>
//                 </div>

//                 {/* Submit Button */}
//                 <Button
//                   type='submit'
//                   disabled={isSubmitting}
//                   className='w-full h-12 text-lg font-semibold bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 transition-all duration-300'
//                 >
//                   {isSubmitting ? (
//                     <>
//                       <Loader2 className='h-5 w-5 mr-2 animate-spin' />
//                       Sending...
//                     </>
//                   ) : (
//                     <>
//                       <Send className='h-5 w-5 mr-2' />
//                       Send Message
//                     </>
//                   )}
//                 </Button>
//               </form>
//             </motion.div>

//             {/* Contact Information */}
//             <motion.div
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6, delay: 0.4 }}
//               className='space-y-8'
//             >
//               <div>
//                 <h2 className='text-3xl font-bold text-white mb-4'>
//                   Get in touch
//                 </h2>
//                 <p className='text-gray-400'>
//                   Prefer to reach out directly? Here are all the ways you can
//                   contact us.
//                 </p>
//               </div>

//               <div className='space-y-6'>
//                 {contactInfo.map((item, index) => (
//                   <motion.a
//                     key={item.label}
//                     href={item.href}
//                     target={item.label === "Address" ? "_blank" : undefined}
//                     rel={
//                       item.label === "Address"
//                         ? "noopener noreferrer"
//                         : undefined
//                     }
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
//                     className='flex items-start gap-4 p-6 bg-gray-800/30 border border-gray-700/50 rounded-xl hover:bg-gray-800/50 hover:border-gray-600/50 transition-all duration-300 group'
//                   >
//                     <div className='p-3 bg-violet-600/20 rounded-lg group-hover:bg-violet-600/30 transition-colors'>
//                       <item.icon className='h-6 w-6 text-violet-400' />
//                     </div>
//                     <div>
//                       <h3 className='font-semibold text-white mb-1'>
//                         {item.label}
//                       </h3>
//                       <p className='text-gray-300 group-hover:text-white transition-colors'>
//                         {item.value}
//                       </p>
//                     </div>
//                   </motion.a>
//                 ))}
//               </div>

//               {/* Additional Info */}
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: 0.9 }}
//                 className='p-6 bg-gradient-to-br from-violet-900/20 to-purple-900/20 border border-violet-500/20 rounded-xl'
//               >
//                 <h3 className='font-semibold text-white mb-3'>Response Time</h3>
//                 <p className='text-gray-300 mb-4'>
//                   We typically respond to all inquiries within 24 hours during
//                   business days. For urgent matters, please call us directly.
//                 </p>
//                 <div className='flex items-center gap-2 text-sm text-violet-400'>
//                   <CheckCircle className='h-4 w-4' />
//                   <span>Business Hours: Mon-Fri, 9AM-6PM PST</span>
//                 </div>
//               </motion.div>
//             </motion.div>
//           </div>
//         </div>
//       </main>

//       <Footer />
//     </div>
//   );
// }

"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
  User,
  Building,
  MessageSquare,
  FileText,
  ArrowLeft,
} from "lucide-react";

import {
  contactFormSchema,
  type ContactFormData,
} from "@/lib/validations/contact";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface FormStatus {
  type: "success" | "error" | null;
  message: string;
}

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<FormStatus>({
    type: null,
    message: "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: "onBlur",
  });

  const watchedFields = watch();

  const handleBackToHome = (): void => {
    window.history.back();
  };

  const onSubmit = async (data: ContactFormData): Promise<void> => {
    setIsSubmitting(true);
    setFormStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          honeypot: "", // Honeypot field for spam protection
        }),
      });

      const result = await response.json();

      if (result.success) {
        setFormStatus({
          type: "success",
          message:
            result.message ||
            "Message sent successfully! We will get back to you soon.",
        });
        reset();
      } else {
        setFormStatus({
          type: "error",
          message: result.error || "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      console.error("Contact form submission error:", error);
      setFormStatus({
        type: "error",
        message: "Network error. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hello@honodev.studio",
      href: "mailto:hello@honodev.studio",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (415) 555-0123",
      href: "tel:+14155550123",
    },
    {
      icon: MapPin,
      label: "Address",
      value: "123 Innovation Drive, San Francisco, CA 94105",
      href: "https://maps.google.com/?q=123+Innovation+Drive,+San+Francisco,+CA+94105",
    },
  ];

  return (
    <div className='min-h-screen bg-gray-950 text-white'>
      {/* Back to Home Button */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className='fixed top-6 left-6 z-50'
      >
        <Button
          variant='outline'
          size='sm'
          className='bg-gray-900/80 backdrop-blur-sm border-gray-700 hover:bg-gray-800 hover:border-gray-600 text-gray-300 hover:text-white transition-all duration-300'
          onClick={handleBackToHome}
        >
          <ArrowLeft className='h-4 w-4 mr-2' />
          Back to Home
        </Button>
      </motion.div>

      <main className='pt-24 pb-16'>
        <div className='container mx-auto px-4 max-w-6xl'>
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='text-center mb-16'
          >
            <h1 className='text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400 mb-6 p-1'>
              Let&apos;s Build Something Amazing
            </h1>
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
              Ready to transform your ideas into exceptional digital
              experiences? Get in touch and let&apos;s discuss how we can help
              bring your vision to life.
            </p>
          </motion.div>

          <div className='grid lg:grid-cols-2 gap-16'>
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className='space-y-8'
            >
              <div>
                <h2 className='text-3xl font-bold text-white mb-4'>
                  Send us a message
                </h2>
                <p className='text-gray-400'>
                  Fill out the form below and we&apos;ll get back to you within
                  24 hours.
                </p>
              </div>

              {/* Status Messages */}
              <AnimatePresence>
                {formStatus.type && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={`p-4 rounded-lg border flex items-center gap-3 ${
                      formStatus.type === "success"
                        ? "bg-green-900/20 border-green-500/30 text-green-400"
                        : "bg-red-900/20 border-red-500/30 text-red-400"
                    }`}
                  >
                    {formStatus.type === "success" ? (
                      <CheckCircle className='h-5 w-5 flex-shrink-0' />
                    ) : (
                      <AlertCircle className='h-5 w-5 flex-shrink-0' />
                    )}
                    <p>{formStatus.message}</p>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
                {/* Name Field */}
                <div className='space-y-2'>
                  <Label htmlFor='name' className='flex items-center gap-2'>
                    <User className='h-4 w-4' />
                    Name *
                  </Label>
                  <Input
                    id='name'
                    {...register("name")}
                    placeholder='Your full name'
                    className={errors.name ? "border-red-500" : ""}
                  />
                  {errors.name && (
                    <p className='text-red-400 text-sm'>
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div className='space-y-2'>
                  <Label htmlFor='email' className='flex items-center gap-2'>
                    <Mail className='h-4 w-4' />
                    Email *
                  </Label>
                  <Input
                    id='email'
                    type='email'
                    {...register("email")}
                    placeholder='your.email@example.com'
                    className={errors.email ? "border-red-500" : ""}
                  />
                  {errors.email && (
                    <p className='text-red-400 text-sm'>
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Company Field (Optional) */}
                <div className='space-y-2'>
                  <Label htmlFor='company' className='flex items-center gap-2'>
                    <Building className='h-4 w-4' />
                    Company
                  </Label>
                  <Input
                    id='company'
                    {...register("company")}
                    placeholder='Your company name (optional)'
                    className={errors.company ? "border-red-500" : ""}
                  />
                  {errors.company && (
                    <p className='text-red-400 text-sm'>
                      {errors.company.message}
                    </p>
                  )}
                </div>

                {/* Phone Field (Optional) */}
                <div className='space-y-2'>
                  <Label htmlFor='phone' className='flex items-center gap-2'>
                    <Phone className='h-4 w-4' />
                    Phone
                  </Label>
                  <Input
                    id='phone'
                    type='tel'
                    {...register("phone")}
                    placeholder='+1 (555) 123-4567 (optional)'
                    className={errors.phone ? "border-red-500" : ""}
                  />
                  {errors.phone && (
                    <p className='text-red-400 text-sm'>
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                {/* Subject Field */}
                <div className='space-y-2'>
                  <Label htmlFor='subject' className='flex items-center gap-2'>
                    <FileText className='h-4 w-4' />
                    Subject *
                  </Label>
                  <Input
                    id='subject'
                    {...register("subject")}
                    placeholder="What's this about?"
                    className={errors.subject ? "border-red-500" : ""}
                  />
                  {errors.subject && (
                    <p className='text-red-400 text-sm'>
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div className='space-y-2'>
                  <Label htmlFor='message' className='flex items-center gap-2'>
                    <MessageSquare className='h-4 w-4' />
                    Message *
                  </Label>
                  <Textarea
                    id='message'
                    {...register("message")}
                    placeholder='Tell us about your project, goals, timeline, or any questions you have...'
                    rows={6}
                    className={errors.message ? "border-red-500" : ""}
                  />
                  {errors.message && (
                    <p className='text-red-400 text-sm'>
                      {errors.message.message}
                    </p>
                  )}
                  <p className='text-gray-500 text-sm'>
                    {watchedFields.message?.length || 0}/1000 characters
                  </p>
                </div>

                {/* Submit Button */}
                <Button
                  type='submit'
                  disabled={isSubmitting}
                  className='w-full h-12 text-lg font-semibold bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 transition-all duration-300'
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className='h-5 w-5 mr-2 animate-spin' />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className='h-5 w-5 mr-2' />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className='space-y-8'
            >
              <div>
                <h2 className='text-3xl font-bold text-white mb-4'>
                  Get in touch
                </h2>
                <p className='text-gray-400'>
                  Prefer to reach out directly? Here are all the ways you can
                  contact us.
                </p>
              </div>

              <div className='space-y-6'>
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target={item.label === "Address" ? "_blank" : undefined}
                    rel={
                      item.label === "Address"
                        ? "noopener noreferrer"
                        : undefined
                    }
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className='flex items-start gap-4 p-6 bg-gray-800/30 border border-gray-700/50 rounded-xl hover:bg-gray-800/50 hover:border-gray-600/50 transition-all duration-300 group'
                  >
                    <div className='p-3 bg-violet-600/20 rounded-lg group-hover:bg-violet-600/30 transition-colors'>
                      <item.icon className='h-6 w-6 text-violet-400' />
                    </div>
                    <div>
                      <h3 className='font-semibold text-white mb-1'>
                        {item.label}
                      </h3>
                      <p className='text-gray-300 group-hover:text-white transition-colors'>
                        {item.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Additional Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className='p-6 bg-gradient-to-br from-violet-900/20 to-purple-900/20 border border-violet-500/20 rounded-xl'
              >
                <h3 className='font-semibold text-white mb-3'>Response Time</h3>
                <p className='text-gray-300 mb-4'>
                  We typically respond to all inquiries within 24 hours during
                  business days. For urgent matters, please call us directly.
                </p>
                <div className='flex items-center gap-2 text-sm text-violet-400'>
                  <CheckCircle className='h-4 w-4' />
                  <span>Business Hours: Mon-Fri, 9AM-6PM PST</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
