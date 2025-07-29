// // // "use client";

// // // import React, { useState } from "react";
// // // import { useForm } from "react-hook-form";
// // // import { zodResolver } from "@hookform/resolvers/zod";
// // // import { motion, AnimatePresence } from "framer-motion";
// // // import {
// // //   Mail,
// // //   Phone,
// // //   MapPin,
// // //   Send,
// // //   CheckCircle,
// // //   AlertCircle,
// // //   Loader2,
// // //   User,
// // //   Building,
// // //   MessageSquare,
// // //   FileText,
// // // } from "lucide-react";

// // // import {
// // //   contactFormSchema,
// // //   type ContactFormData,
// // // } from "@/lib/validations/contact";
// // // import { Navbar } from "@/components/Navbar";
// // // import { Footer } from "@/components/Footer";
// // // import { Button } from "@/components/ui/button";
// // // import { Input } from "@/components/ui/input";
// // // import { Textarea } from "@/components/ui/textarea";
// // // import { Label } from "@/components/ui/label";

// // // interface FormStatus {
// // //   type: "success" | "error" | null;
// // //   message: string;
// // // }

// // // export default function ContactPage() {
// // //   const [isSubmitting, setIsSubmitting] = useState(false);
// // //   const [formStatus, setFormStatus] = useState<FormStatus>({
// // //     type: null,
// // //     message: "",
// // //   });

// // //   const {
// // //     register,
// // //     handleSubmit,
// // //     formState: { errors },
// // //     reset,
// // //     watch,
// // //   } = useForm<ContactFormData>({
// // //     resolver: zodResolver(contactFormSchema),
// // //     mode: "onBlur",
// // //   });

// // //   const watchedFields = watch();

// // //   const onSubmit = async (data: ContactFormData) => {
// // //     setIsSubmitting(true);
// // //     setFormStatus({ type: null, message: "" });

// // //     try {
// // //       const response = await fetch("/api/contact", {
// // //         method: "POST",
// // //         headers: {
// // //           "Content-Type": "application/json",
// // //         },
// // //         body: JSON.stringify({
// // //           ...data,
// // //           honeypot: "", // Honeypot field for spam protection
// // //         }),
// // //       });

// // //       const result = await response.json();

// // //       if (result.success) {
// // //         setFormStatus({
// // //           type: "success",
// // //           message:
// // //             result.message ||
// // //             "Message sent successfully! We will get back to you soon.",
// // //         });
// // //         reset();
// // //       } else {
// // //         setFormStatus({
// // //           type: "error",
// // //           message: result.error || "Failed to send message. Please try again.",
// // //         });
// // //       }
// // //     } catch (error) {
// // //       setFormStatus({
// // //         type: "error",
// // //         message: "Network error. Please check your connection and try again.",
// // //       });
// // //     } finally {
// // //       setIsSubmitting(false);
// // //     }
// // //   };

// // //   const contactInfo = [
// // //     {
// // //       icon: Mail,
// // //       label: "Email",
// // //       value: "hello@honodev.studio",
// // //       href: "mailto:hello@honodev.studio",
// // //     },
// // //     {
// // //       icon: Phone,
// // //       label: "Phone",
// // //       value: "+1 (415) 555-0123",
// // //       href: "tel:+14155550123",
// // //     },
// // //     {
// // //       icon: MapPin,
// // //       label: "Address",
// // //       value: "123 Innovation Drive, San Francisco, CA 94105",
// // //       href: "https://maps.google.com/?q=123+Innovation+Drive,+San+Francisco,+CA+94105",
// // //     },
// // //   ];

// // //   return (
// // //     <div className='min-h-screen bg-gray-950 text-white'>
// // //       <Navbar />

// // //       <main className='pt-24 pb-16'>
// // //         <div className='container mx-auto px-4 max-w-6xl'>
// // //           {/* Header */}
// // //           <motion.div
// // //             initial={{ opacity: 0, y: 20 }}
// // //             animate={{ opacity: 1, y: 0 }}
// // //             transition={{ duration: 0.6 }}
// // //             className='text-center mb-16'
// // //           >
// // //             <h1 className='text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400 mb-6 p-1'>
// // //               Let's Build Something Amazing
// // //             </h1>
// // //             <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
// // //               Ready to transform your ideas into exceptional digital
// // //               experiences? Get in touch and let's discuss how we can help bring
// // //               your vision to life.
// // //             </p>
// // //           </motion.div>

// // //           <div className='grid lg:grid-cols-2 gap-16'>
// // //             {/* Contact Form */}
// // //             <motion.div
// // //               initial={{ opacity: 0, x: -20 }}
// // //               animate={{ opacity: 1, x: 0 }}
// // //               transition={{ duration: 0.6, delay: 0.2 }}
// // //               className='space-y-8'
// // //             >
// // //               <div>
// // //                 <h2 className='text-3xl font-bold text-white mb-4'>
// // //                   Send us a message
// // //                 </h2>
// // //                 <p className='text-gray-400'>
// // //                   Fill out the form below and we'll get back to you within 24
// // //                   hours.
// // //                 </p>
// // //               </div>

// // //               {/* Status Messages */}
// // //               <AnimatePresence>
// // //                 {formStatus.type && (
// // //                   <motion.div
// // //                     initial={{ opacity: 0, y: -10 }}
// // //                     animate={{ opacity: 1, y: 0 }}
// // //                     exit={{ opacity: 0, y: -10 }}
// // //                     className={`p-4 rounded-lg border flex items-center gap-3 ${
// // //                       formStatus.type === "success"
// // //                         ? "bg-green-900/20 border-green-500/30 text-green-400"
// // //                         : "bg-red-900/20 border-red-500/30 text-red-400"
// // //                     }`}
// // //                   >
// // //                     {formStatus.type === "success" ? (
// // //                       <CheckCircle className='h-5 w-5 flex-shrink-0' />
// // //                     ) : (
// // //                       <AlertCircle className='h-5 w-5 flex-shrink-0' />
// // //                     )}
// // //                     <p>{formStatus.message}</p>
// // //                   </motion.div>
// // //                 )}
// // //               </AnimatePresence>

// // //               <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
// // //                 {/* Name Field */}
// // //                 <div className='space-y-2'>
// // //                   <Label htmlFor='name' className='flex items-center gap-2'>
// // //                     <User className='h-4 w-4' />
// // //                     Name *
// // //                   </Label>
// // //                   <Input
// // //                     id='name'
// // //                     {...register("name")}
// // //                     placeholder='Your full name'
// // //                     className={errors.name ? "border-red-500" : ""}
// // //                   />
// // //                   {errors.name && (
// // //                     <p className='text-red-400 text-sm'>
// // //                       {errors.name.message}
// // //                     </p>
// // //                   )}
// // //                 </div>

// // //                 {/* Email Field */}
// // //                 <div className='space-y-2'>
// // //                   <Label htmlFor='email' className='flex items-center gap-2'>
// // //                     <Mail className='h-4 w-4' />
// // //                     Email *
// // //                   </Label>
// // //                   <Input
// // //                     id='email'
// // //                     type='email'
// // //                     {...register("email")}
// // //                     placeholder='your.email@example.com'
// // //                     className={errors.email ? "border-red-500" : ""}
// // //                   />
// // //                   {errors.email && (
// // //                     <p className='text-red-400 text-sm'>
// // //                       {errors.email.message}
// // //                     </p>
// // //                   )}
// // //                 </div>

// // //                 {/* Company Field (Optional) */}
// // //                 <div className='space-y-2'>
// // //                   <Label htmlFor='company' className='flex items-center gap-2'>
// // //                     <Building className='h-4 w-4' />
// // //                     Company
// // //                   </Label>
// // //                   <Input
// // //                     id='company'
// // //                     {...register("company")}
// // //                     placeholder='Your company name (optional)'
// // //                     className={errors.company ? "border-red-500" : ""}
// // //                   />
// // //                   {errors.company && (
// // //                     <p className='text-red-400 text-sm'>
// // //                       {errors.company.message}
// // //                     </p>
// // //                   )}
// // //                 </div>

// // //                 {/* Phone Field (Optional) */}
// // //                 <div className='space-y-2'>
// // //                   <Label htmlFor='phone' className='flex items-center gap-2'>
// // //                     <Phone className='h-4 w-4' />
// // //                     Phone
// // //                   </Label>
// // //                   <Input
// // //                     id='phone'
// // //                     type='tel'
// // //                     {...register("phone")}
// // //                     placeholder='+1 (555) 123-4567 (optional)'
// // //                     className={errors.phone ? "border-red-500" : ""}
// // //                   />
// // //                   {errors.phone && (
// // //                     <p className='text-red-400 text-sm'>
// // //                       {errors.phone.message}
// // //                     </p>
// // //                   )}
// // //                 </div>

// // //                 {/* Subject Field */}
// // //                 <div className='space-y-2'>
// // //                   <Label htmlFor='subject' className='flex items-center gap-2'>
// // //                     <FileText className='h-4 w-4' />
// // //                     Subject *
// // //                   </Label>
// // //                   <Input
// // //                     id='subject'
// // //                     {...register("subject")}
// // //                     placeholder="What's this about?"
// // //                     className={errors.subject ? "border-red-500" : ""}
// // //                   />
// // //                   {errors.subject && (
// // //                     <p className='text-red-400 text-sm'>
// // //                       {errors.subject.message}
// // //                     </p>
// // //                   )}
// // //                 </div>

// // //                 {/* Message Field */}
// // //                 <div className='space-y-2'>
// // //                   <Label htmlFor='message' className='flex items-center gap-2'>
// // //                     <MessageSquare className='h-4 w-4' />
// // //                     Message *
// // //                   </Label>
// // //                   <Textarea
// // //                     id='message'
// // //                     {...register("message")}
// // //                     placeholder='Tell us about your project, goals, timeline, or any questions you have...'
// // //                     rows={6}
// // //                     className={errors.message ? "border-red-500" : ""}
// // //                   />
// // //                   {errors.message && (
// // //                     <p className='text-red-400 text-sm'>
// // //                       {errors.message.message}
// // //                     </p>
// // //                   )}
// // //                   <p className='text-gray-500 text-sm'>
// // //                     {watchedFields.message?.length || 0}/1000 characters
// // //                   </p>
// // //                 </div>

// // //                 {/* Submit Button */}
// // //                 <Button
// // //                   type='submit'
// // //                   disabled={isSubmitting}
// // //                   className='w-full h-12 text-lg font-semibold bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 transition-all duration-300'
// // //                 >
// // //                   {isSubmitting ? (
// // //                     <>
// // //                       <Loader2 className='h-5 w-5 mr-2 animate-spin' />
// // //                       Sending...
// // //                     </>
// // //                   ) : (
// // //                     <>
// // //                       <Send className='h-5 w-5 mr-2' />
// // //                       Send Message
// // //                     </>
// // //                   )}
// // //                 </Button>
// // //               </form>
// // //             </motion.div>

// // //             {/* Contact Information */}
// // //             <motion.div
// // //               initial={{ opacity: 0, x: 20 }}
// // //               animate={{ opacity: 1, x: 0 }}
// // //               transition={{ duration: 0.6, delay: 0.4 }}
// // //               className='space-y-8'
// // //             >
// // //               <div>
// // //                 <h2 className='text-3xl font-bold text-white mb-4'>
// // //                   Get in touch
// // //                 </h2>
// // //                 <p className='text-gray-400'>
// // //                   Prefer to reach out directly? Here are all the ways you can
// // //                   contact us.
// // //                 </p>
// // //               </div>

// // //               <div className='space-y-6'>
// // //                 {contactInfo.map((item, index) => (
// // //                   <motion.a
// // //                     key={item.label}
// // //                     href={item.href}
// // //                     target={item.label === "Address" ? "_blank" : undefined}
// // //                     rel={
// // //                       item.label === "Address"
// // //                         ? "noopener noreferrer"
// // //                         : undefined
// // //                     }
// // //                     initial={{ opacity: 0, y: 20 }}
// // //                     animate={{ opacity: 1, y: 0 }}
// // //                     transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
// // //                     className='flex items-start gap-4 p-6 bg-gray-800/30 border border-gray-700/50 rounded-xl hover:bg-gray-800/50 hover:border-gray-600/50 transition-all duration-300 group'
// // //                   >
// // //                     <div className='p-3 bg-violet-600/20 rounded-lg group-hover:bg-violet-600/30 transition-colors'>
// // //                       <item.icon className='h-6 w-6 text-violet-400' />
// // //                     </div>
// // //                     <div>
// // //                       <h3 className='font-semibold text-white mb-1'>
// // //                         {item.label}
// // //                       </h3>
// // //                       <p className='text-gray-300 group-hover:text-white transition-colors'>
// // //                         {item.value}
// // //                       </p>
// // //                     </div>
// // //                   </motion.a>
// // //                 ))}
// // //               </div>

// // //               {/* Additional Info */}
// // //               <motion.div
// // //                 initial={{ opacity: 0, y: 20 }}
// // //                 animate={{ opacity: 1, y: 0 }}
// // //                 transition={{ duration: 0.6, delay: 0.9 }}
// // //                 className='p-6 bg-gradient-to-br from-violet-900/20 to-purple-900/20 border border-violet-500/20 rounded-xl'
// // //               >
// // //                 <h3 className='font-semibold text-white mb-3'>Response Time</h3>
// // //                 <p className='text-gray-300 mb-4'>
// // //                   We typically respond to all inquiries within 24 hours during
// // //                   business days. For urgent matters, please call us directly.
// // //                 </p>
// // //                 <div className='flex items-center gap-2 text-sm text-violet-400'>
// // //                   <CheckCircle className='h-4 w-4' />
// // //                   <span>Business Hours: Mon-Fri, 9AM-6PM PST</span>
// // //                 </div>
// // //               </motion.div>
// // //             </motion.div>
// // //           </div>
// // //         </div>
// // //       </main>

// // //       <Footer />
// // //     </div>
// // //   );
// // // }

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
// //   ArrowLeft,
// //   Home,
// // } from "lucide-react";

// // import {
// //   contactFormSchema,
// //   type ContactFormData,
// // } from "@/lib/validations/contact";
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
// //       {/* Back to Home Button */}
// //       <motion.div
// //         initial={{ opacity: 0, y: -20 }}
// //         animate={{ opacity: 1, y: 0 }}
// //         transition={{ duration: 0.6 }}
// //         className='fixed top-6 left-6 z-50'
// //       >
// //         <Button
// //           variant='outline'
// //           size='sm'
// //           className='bg-gray-900/80 backdrop-blur-sm border-gray-700 hover:bg-gray-800 hover:border-gray-600 text-gray-300 hover:text-white transition-all duration-300'
// //           onClick={() => window.history.back()}
// //         >
// //           <ArrowLeft className='h-4 w-4 mr-2' />
// //           Back to Home
// //         </Button>
// //       </motion.div>

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

//   const handleBackToHome = (): void => {
//     window.history.back();
//   };

//   const onSubmit = async (data: ContactFormData): Promise<void> => {
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
//       console.error("Contact form submission error:", error);
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
//           onClick={handleBackToHome}
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
//               Let&apos;s Build Something Amazing
//             </h1>
//             <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
//               Ready to transform your ideas into exceptional digital
//               experiences? Get in touch and let&apos;s discuss how we can help
//               bring your vision to life.
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
//                   Fill out the form below and we&apos;ll get back to you within
//                   24 hours.
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
import Image from "next/image";
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
  Sparkles,
} from "lucide-react";

import {
  contactFormSchema,
  type ContactFormData,
} from "@/lib/validations/contact";
import ContactPageFooter from "@/components/FooterVersion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Navbar } from "@/components/Navbar";

interface FormStatus {
  type: "success" | "error" | null;
  message: string;
}

interface ContactInfo {
  icon: typeof Mail;
  label: string;
  value: string;
  href: string;
}

interface ApiResponse {
  success: boolean;
  message?: string;
  error?: string;
}

const ContactPage: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
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
          honeypot: "",
        }),
      });

      const result: ApiResponse = await response.json();

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

  const contactInfo: ContactInfo[] = [
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

  // Animation variants consistent with Hero.tsx and AboutSection.tsx
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 25,
        mass: 0.8,
        duration: 1.0,
      },
    },
  };

  const textRevealVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 120,
        damping: 20,
        mass: 0.8,
        duration: 1.2,
      },
    },
  };

  return (
    <div className='min-h-screen bg-[#111316] text-white relative overflow-hidden font-inter'>
      {/* Background with grid pattern and gradient - Consistent with Hero.tsx */}
      <div className='absolute inset-0 z-0'>
        <motion.div
          initial={{ opacity: 0.8 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className='w-full h-full absolute inset-0'
        >
          {/* Grid pattern */}
          <motion.div
            className='absolute inset-0 opacity-25'
            style={{
              backgroundImage: `linear-gradient(to right, #80808015 1px, transparent 1px), linear-gradient(to bottom, #80808015 1px, transparent 1px)`,
              backgroundSize: `clamp(1rem, 3vw, 2.5rem) clamp(1rem, 3vw, 2.5rem)`,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.25 }}
            transition={{ duration: 2.0, delay: 1.0 }}
          />
          {/* Gradient overlays */}
          <motion.div
            className='absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/30'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />
          <motion.div
            className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.7 }}
          />
        </motion.div>
      </div>

      <Navbar />

      <main className='pt-24 pb-16 relative z-10'>
        <motion.div
          className='container mx-auto px-4 sm:px-6 max-w-6xl'
          variants={containerVariants}
          initial='hidden'
          animate='visible'
        >
          {/* SVG Image Section - Improved mobile visibility */}
          <motion.div
            variants={itemVariants}
            className='flex justify-center pt-6 mb-8 sm:pt-8 sm:mb-10 md:pt-12 md:mb-12'
          >
            <motion.div
              className='relative group'
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className='absolute inset-0 bg-gradient-to-r from-[#E7FF1A]/20 via-violet-400/20 to-cyan-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl scale-125' />
              {/* Improved mobile visibility with better minimum sizes */}
              <div className='relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72'>
                <Image
                  src='/images/contact.svg'
                  alt='Contact Us Illustration'
                  fill
                  className='object-contain drop-shadow-2xl'
                  priority
                  sizes='(max-width: 640px) 160px, (max-width: 768px) 192px, (max-width: 1024px) 224px, (max-width: 1280px) 256px, 288px'
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Header */}
          <motion.div
            variants={itemVariants}
            className='text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20'
          >
            {/* Badge - Consistent with Hero.tsx */}
            <motion.div
              className='inline-flex items-center gap-[clamp(0.4rem,1.5vw,0.75rem)] bg-white/10 backdrop-blur-xl border border-white/20 rounded-full mb-[clamp(0.8rem,2.5vh,1.5rem)]'
              style={{
                padding: `clamp(0.5rem, 2vw, 0.875rem) clamp(1rem, 4vw, 1.75rem)`,
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <Sparkles
                  className='text-[#E7FF1A]'
                  style={{
                    width: "clamp(14px, 3.5vw, 20px)",
                    height: "clamp(14px, 3.5vw, 20px)",
                  }}
                />
              </motion.div>
              <span
                className='font-medium text-white/90'
                style={{
                  fontSize: "clamp(0.8rem, 2.2vw, 1.1rem)",
                }}
              >
                Get in Touch
              </span>
            </motion.div>

            {/* Heading - Consistent with Hero.tsx's textRevealVariants */}
            <motion.h1
              className='font-bold leading-tight text-white mb-4 p-1'
              variants={textRevealVariants}
              initial='hidden'
              animate='visible'
              style={{
                fontSize: "clamp(2.2rem, 9vw + 1rem, min(3.8rem, 10vw))",
                lineHeight: "0.9",
                letterSpacing: "-0.02em",
              }}
            >
              <motion.span
                className='block sm:inline bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                LET&apos;S BUILD
              </motion.span>
              <br className='sm:hidden' />
              <motion.span
                className='block sm:inline bg-gradient-to-r from-[#E7FF1A] via-violet-400 to-cyan-400 bg-clip-text text-transparent'
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 1.0,
                  delay: 1.2,
                  type: "spring",
                  stiffness: 120,
                }}
              >
                SOMETHING AMAZING
              </motion.span>
            </motion.h1>
            <motion.p
              className='text-base md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed px-2 sm:px-4'
              variants={itemVariants}
              initial='hidden'
              animate='visible'
              transition={{ delay: 1.6 }}
            >
              Ready to transform your ideas into exceptional digital
              experiences? Get in touch and let&apos;s discuss how we can help
              bring your vision to life.
            </motion.p>
          </motion.div>

          <div className='grid lg:grid-cols-2 gap-10 lg:gap-16'>
            {/* Contact Form */}
            <motion.div
              variants={itemVariants}
              className='space-y-6 p-5 md:p-8 bg-gray-800/20 border border-gray-700/50 rounded-2xl shadow-xl backdrop-blur-sm'
            >
              <div>
                <h2 className='text-2xl sm:text-3xl font-bold text-white mb-3'>
                  Send us a message
                </h2>
                <p className='text-gray-400 text-sm sm:text-base'>
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
                    className={`p-3 sm:p-4 rounded-lg border flex items-center gap-2 sm:gap-3 text-sm sm:text-base ${
                      formStatus.type === "success"
                        ? "bg-green-900/20 border-green-500/30 text-green-400"
                        : "bg-red-900/20 border-red-500/30 text-red-400"
                    }`}
                  >
                    {formStatus.type === "success" ? (
                      <CheckCircle className='h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0' />
                    ) : (
                      <AlertCircle className='h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0' />
                    )}
                    <p>{formStatus.message}</p>
                  </motion.div>
                )}
              </AnimatePresence>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className='space-y-5 sm:space-y-6'
              >
                {/* Name Field */}
                <div className='space-y-2'>
                  <Label
                    htmlFor='name'
                    className='flex items-center gap-2 text-sm sm:text-base'
                  >
                    <User className='h-4 w-4 text-violet-400' />
                    Name *
                  </Label>
                  <Input
                    id='name'
                    {...register("name")}
                    placeholder='Your full name'
                    className={errors.name ? "border-red-500 ring-red-500" : ""}
                  />
                  {errors.name && (
                    <p className='text-red-400 text-xs sm:text-sm mt-1'>
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div className='space-y-2'>
                  <Label
                    htmlFor='email'
                    className='flex items-center gap-2 text-sm sm:text-base'
                  >
                    <Mail className='h-4 w-4 text-violet-400' />
                    Email *
                  </Label>
                  <Input
                    id='email'
                    type='email'
                    {...register("email")}
                    placeholder='your.email@example.com'
                    className={
                      errors.email ? "border-red-500 ring-red-500" : ""
                    }
                  />
                  {errors.email && (
                    <p className='text-red-400 text-xs sm:text-sm mt-1'>
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Company Field (Optional) */}
                <div className='space-y-2'>
                  <Label
                    htmlFor='company'
                    className='flex items-center gap-2 text-sm sm:text-base'
                  >
                    <Building className='h-4 w-4 text-violet-400' />
                    Company
                  </Label>
                  <Input
                    id='company'
                    {...register("company")}
                    placeholder='Your company name (optional)'
                    className={
                      errors.company ? "border-red-500 ring-red-500" : ""
                    }
                  />
                  {errors.company && (
                    <p className='text-red-400 text-xs sm:text-sm mt-1'>
                      {errors.company.message}
                    </p>
                  )}
                </div>

                {/* Phone Field (Optional) */}
                <div className='space-y-2'>
                  <Label
                    htmlFor='phone'
                    className='flex items-center gap-2 text-sm sm:text-base'
                  >
                    <Phone className='h-4 w-4 text-violet-400' />
                    Phone
                  </Label>
                  <Input
                    id='phone'
                    type='tel'
                    {...register("phone")}
                    placeholder='+1 (555) 123-4567 (optional)'
                    className={
                      errors.phone ? "border-red-500 ring-red-500" : ""
                    }
                  />
                  {errors.phone && (
                    <p className='text-red-400 text-xs sm:text-sm mt-1'>
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                {/* Subject Field */}
                <div className='space-y-2'>
                  <Label
                    htmlFor='subject'
                    className='flex items-center gap-2 text-sm sm:text-base'
                  >
                    <FileText className='h-4 w-4 text-violet-400' />
                    Subject *
                  </Label>
                  <Input
                    id='subject'
                    {...register("subject")}
                    placeholder="What's this about?"
                    className={
                      errors.subject ? "border-red-500 ring-red-500" : ""
                    }
                  />
                  {errors.subject && (
                    <p className='text-red-400 text-xs sm:text-sm mt-1'>
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div className='space-y-2'>
                  <Label
                    htmlFor='message'
                    className='flex items-center gap-2 text-sm sm:text-base'
                  >
                    <MessageSquare className='h-4 w-4 text-violet-400' />
                    Message *
                  </Label>
                  <Textarea
                    id='message'
                    {...register("message")}
                    placeholder='Tell us about your project, goals, timeline, or any questions you have...'
                    rows={6}
                    className={
                      errors.message ? "border-red-500 ring-red-500" : ""
                    }
                  />
                  {errors.message && (
                    <p className='text-red-400 text-xs sm:text-sm mt-1'>
                      {errors.message.message}
                    </p>
                  )}
                  <p className='text-gray-500 text-xs sm:text-sm mt-1'>
                    {watchedFields.message?.length || 0}/1000 characters
                  </p>
                </div>

                {/* Submit Button - Consistent with Hero.tsx CTA */}
                <motion.button
                  type='submit'
                  disabled={isSubmitting}
                  className='group inline-flex items-center justify-center gap-[clamp(0.5rem,2vw,0.75rem)] bg-[#E7FF1A] text-[#111316] font-bold uppercase rounded-xl transition-all duration-200 hover:bg-[#E7FF1A]/90 hover:shadow-lg hover:shadow-[#E7FF1A]/20 w-full relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed'
                  style={{
                    padding:
                      "clamp(0.8rem, 2.5vw, 1rem) clamp(1.5rem, 4vw, 2.25rem)",
                    fontSize: "clamp(0.85rem, 1.8vw, 1rem)",
                    minWidth: "clamp(150px, 40vw, 180px)",
                  }}
                  whileHover={
                    !isSubmitting
                      ? {
                          scale: 1.05,
                          y: -2,
                          boxShadow: "0px 10px 30px rgba(231, 255, 26, 0.4)",
                        }
                      : {}
                  }
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  transition={{ duration: 0.2, type: "spring", stiffness: 400 }}
                >
                  {/* Animated background */}
                  <motion.div
                    className='absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent'
                    initial={{ x: "-100%" }}
                    whileHover={!isSubmitting ? { x: "100%" } : {}}
                    transition={{ duration: 0.6 }}
                  />
                  {isSubmitting ? (
                    <>
                      <Loader2 className='h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2 animate-spin relative z-10' />
                      <span className='relative z-10'>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className='h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2 relative z-10' />
                      <span className='relative z-10'>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              variants={itemVariants}
              className='space-y-6 sm:space-y-8'
            >
              <div>
                <h2 className='text-2xl sm:text-3xl font-bold text-white mb-3'>
                  Get in touch directly
                </h2>
                <p className='text-gray-400 text-sm sm:text-base'>
                  Prefer to reach out directly? Here are all the ways you can
                  contact us.
                </p>
              </div>

              <div className='space-y-4 sm:space-y-6'>
                {contactInfo.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
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
                      transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                      className='flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-gray-800/30 border border-gray-700/50 rounded-xl hover:bg-gray-800/50 hover:border-gray-600/50 transition-all duration-300 group shadow-md hover:shadow-lg'
                      whileHover={{ y: -5, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className='p-2 sm:p-3 bg-violet-600/20 rounded-lg group-hover:bg-violet-600/30 transition-colors'>
                        <IconComponent className='h-5 w-5 sm:h-6 sm:w-6 text-violet-400' />
                      </div>
                      <div>
                        <h3 className='font-semibold text-white mb-0.5 sm:mb-1 text-base sm:text-lg'>
                          {item.label}
                        </h3>
                        <p className='text-gray-300 group-hover:text-white transition-colors text-sm sm:text-base'>
                          {item.value}
                        </p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>

              {/* Additional Info */}
              <motion.div
                variants={itemVariants}
                className='p-5 sm:p-6 bg-gradient-to-br from-violet-900/20 to-purple-900/20 border border-violet-500/20 rounded-xl shadow-md'
              >
                <h3 className='font-semibold text-white mb-2 sm:mb-3 text-lg sm:text-xl'>
                  Response Time
                </h3>
                <p className='text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base'>
                  We typically respond to all inquiries within 24 hours during
                  business days. For urgent matters, please call us directly.
                </p>
                <div className='flex items-center gap-2 text-xs sm:text-sm text-violet-400'>
                  <CheckCircle className='h-3.5 w-3.5 sm:h-4 sm:w-4' />
                  <span>Business Hours: Mon-Fri, 9AM-6PM PST</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </main>
      <ContactPageFooter />
    </div>
  );
};

export default ContactPage;
