"use client";

import React from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <div className="bg-background py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:max-w-4xl">
              <div className="text-center">
                <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Contact Us</h1>
                <p className="mt-6 text-lg leading-8 text-muted-foreground">
                  Have a question or want to discuss your project? Get in touch with our team.
                </p>
              </div>
              
              <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
                <Card className="overflow-hidden">
                  <CardHeader>
                    <CardTitle>Send Us a Message</CardTitle>
                    <CardDescription>Fill out the form below and we&apos;ll get back to you as soon as possible.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4">
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <label htmlFor="first-name" className="text-sm font-medium">
                            First Name
                          </label>
                          <input
                            id="first-name"
                            type="text"
                            className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm"
                            placeholder="John"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="last-name" className="text-sm font-medium">
                            Last Name
                          </label>
                          <input
                            id="last-name"
                            type="text"
                            className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm"
                            placeholder="Doe"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm"
                          placeholder="john.doe@example.com"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium">
                          Subject
                        </label>
                        <input
                          id="subject"
                          type="text"
                          className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm"
                          placeholder="Project Inquiry"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium">
                          Message
                        </label>
                        <textarea
                          id="message"
                          className="min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm"
                          placeholder="Tell us about your project or questions..."
                        ></textarea>
                      </div>
                      
                      <Button type="submit" className="w-full">
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
                
                <div className="space-y-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>Office Location</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <p className="text-sm text-muted-foreground">
                        Moskovskiy Universitet Im. S.yu. Vitte<br />
                        Moscow, Russia<br />
                        Russia
                      </p>
                      <div className="h-[200px] w-full bg-muted rounded-md overflow-hidden">
                        <iframe 
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2248.3350532691134!2d37.652788620658484!3d55.700547592607556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4141010dbb46dbd9%3A0x28b441644cae4321!2sMoskovskiy%20Universitet%20Im.%20S.yu.%20Vitte!5e0!3m2!1sen!2s!4v1742509047859!5m2!1sen!2s" 
                          width="100%" 
                          height="100%" 
                          style={{ border: 0 }} 
                          allowFullScreen={true} 
                          loading="lazy" 
                          referrerPolicy="no-referrer-when-downgrade"
                          className="rounded-md"
                          title="Office Location Map"
                        />
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Contact Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                        </svg>
                        <span className="text-sm text-muted-foreground">+7 980 241 3073</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                        </svg>
                        <span className="text-sm text-muted-foreground">info@pyanprojects.my</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10"></circle>
                          <line x1="2" y1="12" x2="22" y2="12"></line>
                          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                        </svg>
                        <span className="text-sm text-muted-foreground">pyanprojects.my</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 