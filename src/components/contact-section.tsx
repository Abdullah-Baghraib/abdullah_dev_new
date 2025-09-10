import React from "react";
import { Button } from "@/components/ui/button";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { Mail, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

export function ContactSection() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch("https://formspree.io/f/mwpboqno", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      toast.success("Message sent successfully!");
      reset();
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Failed to send message. Please try again later.";
      toast.error(errorMessage);
      console.error("Error sending message:", error);
    }
  };

  return (
    <section id="contact" className="bg-background py-8 sm:py-12 md:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <AnimatedGroup preset="fade" className="mb-6 sm:mb-8 md:mb-12 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 md:mb-4">Get In Touch</h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            I'm always open to discussing new projects, opportunities in development, 
            or partnerships. Feel free to reach out.
          </p>
        </AnimatedGroup>

        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <AnimatedGroup preset="slide" className="space-y-4 sm:space-y-6">
            <div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2">Contact Information</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Feel free to reach out through the form or via direct contact methods below.
              </p>
            </div>
            
            <div>
              <p className="text-xs sm:text-sm text-muted-foreground font-medium mb-1">Email</p>
              <a 
                href="mailto:abdullahbaghraib@gmail.com" 
                className="flex items-center gap-2 text-foreground hover:text-primary transition-colors text-sm sm:text-base"
              >
                <Mail size={16} className="md:size-18" />
                abdullahbaghraib@gmail.com
              </a>
            </div>

            <div>
              <p className="text-xs sm:text-sm text-muted-foreground font-medium mb-1">Location</p>
              <p className="text-sm sm:text-base">Riyadh, Saudi Arabia</p>
            </div>
            
            <div>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Looking forward to hearing from you
              </p>
            </div>
          </AnimatedGroup>

          <AnimatedGroup preset="slide" className="bg-muted/30 p-4 sm:p-6 rounded-xl border">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 sm:space-y-4">
              <div>
                <label htmlFor="name" className="block text-xs sm:text-sm font-medium mb-1">Name</label>
                <input 
                  {...register("name")}
                  type="text" 
                  id="name" 
                  className="w-full px-3 py-2.5 bg-background border rounded-md focus:outline-none focus:ring-1 focus:ring-primary text-sm sm:text-base"
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="text-xs sm:text-sm text-red-500 mt-1">{errors.name.message}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-xs sm:text-sm font-medium mb-1">Email</label>
                <input 
                  {...register("email")}
                  type="email" 
                  id="email" 
                  className="w-full px-3 py-2.5 bg-background border rounded-md focus:outline-none focus:ring-1 focus:ring-primary text-sm sm:text-base"
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="text-xs sm:text-sm text-red-500 mt-1">{errors.email.message}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="message" className="block text-xs sm:text-sm font-medium mb-1">Message</label>
                <textarea 
                  {...register("message")}
                  id="message" 
                  rows={4} 
                  className="w-full px-3 py-2.5 bg-background border rounded-md focus:outline-none focus:ring-1 focus:ring-primary text-sm sm:text-base"
                  placeholder="What would you like to discuss?"
                ></textarea>
                {errors.message && (
                  <p className="text-xs sm:text-sm text-red-500 mt-1">{errors.message.message}</p>
                )}
              </div>
              
              <Button type="submit" className="w-full py-2.5" disabled={isSubmitting}>
                <Send className="mr-2" size={16} />
                <span className="text-sm sm:text-base">
                  {isSubmitting ? "Sending..." : "Send Message"}
                </span>
              </Button>
            </form>
          </AnimatedGroup>
        </div>
      </div>
    </section>
  );
}
