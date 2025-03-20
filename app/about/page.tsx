"use client";

import React from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <div className="bg-background py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">About Us</h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                We are a creative team of developers, designers, and 3D artists with expertise in various fields of software and game development.
              </p>
            </div>
            
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                <div className="flex flex-col">
                  <dt className="text-base font-semibold leading-7 text-foreground">Our Mission</dt>
                  <dd className="mt-2 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                    <p className="flex-auto">
                      To deliver exceptional software solutions by combining technical excellence with innovative approaches.
                      We strive to exceed client expectations and create products that make a real difference.
                    </p>
                  </dd>
                </div>
                
                <div className="flex flex-col">
                  <dt className="text-base font-semibold leading-7 text-foreground">Our Vision</dt>
                  <dd className="mt-2 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                    <p className="flex-auto">
                      To be recognized as a leading development team that consistently pushes the boundaries of 
                      what&apos;s possible in software engineering, gaming, and web development.
                    </p>
                  </dd>
                </div>
                
                <div className="flex flex-col">
                  <dt className="text-base font-semibold leading-7 text-foreground">Our Values</dt>
                  <dd className="mt-2 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                    <p className="flex-auto">
                      Excellence, innovation, integrity, and collaboration. We believe in creating a positive impact 
                      through our work and maintaining the highest standards in all that we do.
                    </p>
                  </dd>
                </div>
              </dl>
            </div>
            
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mx-0">
              <h2 className="text-2xl font-bold tracking-tight text-foreground">Our Expertise</h2>
              <div className="mt-10 space-y-8 border-t border-muted pt-10 sm:space-y-10">
                <div>
                  <h3 className="text-lg font-semibold leading-8 text-foreground">Unreal Engine Development</h3>
                  <p className="mt-4 text-base leading-7 text-muted-foreground">
                    Our Unreal Engine team specializes in creating immersive game experiences and interactive applications. 
                    With strong expertise in 3D modeling, game mechanics, and optimization, we deliver engaging 
                    products that push the boundaries of interactive entertainment.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold leading-8 text-foreground">Python Full Stack Development</h3>
                  <p className="mt-4 text-base leading-7 text-muted-foreground">
                    Our Python team excels in building robust server solutions and full-stack applications. 
                    We leverage machine learning and data processing capabilities to create intelligent systems
                    that solve complex problems and deliver exceptional results for our clients.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold leading-8 text-foreground">Frontend Development</h3>
                  <p className="mt-4 text-base leading-7 text-muted-foreground">
                    Our frontend specialists create beautiful, responsive, and intuitive user interfaces. 
                    Using modern technologies like React, Next.js, and advanced CSS frameworks, we build 
                    engaging experiences that users love.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold leading-8 text-foreground">3D Modeling & Design</h3>
                  <p className="mt-4 text-base leading-7 text-muted-foreground">
                    Our 3D modeling team creates visually stunning assets for games, applications, and visualizations.
                    With expertise in various modeling techniques and tools, we produce high-quality models that
                    integrate seamlessly with our development workflows, enhancing the visual quality of all our projects.
                  </p>
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