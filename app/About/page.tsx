'use client';

import React from 'react';
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

const AboutFlimfy = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-950 text-white px-2">
      <h1 className="text-4xl font-bold mb-6 text-center">Welcome to Flimfy</h1>
      <p className="text-lg text-gray-300 mb-10 text-center max-w-3xl">
        Flimfy is your gateway to discovering, organizing, and enjoying movies like never before. 
      </p>

      <Dialog>
        <DialogTrigger asChild>
          <Button className="bg-blue-600 hover:bg-blue-700 rounded-md px-6 py-2">
            Learn More
          </Button>
        </DialogTrigger>

        <DialogContent className="bg-gray-900 text-white p-6 rounded-lg shadow-lg max-w-lg w-full">
          {/* Accessible Title */}
          <DialogTitle className="text-2xl font-bold mb-4">About Flimfy</DialogTitle>

          {/* Dialog Content */}
          <div className="space-y-4">
            {/* Our Services */}
            <section>
              <h2 className="text-xl font-semibold mb-2">Our Services</h2>
              <p className="text-gray-300">
                Flimfy offers a wide range of services, including:
              </p>
              <ul className="list-disc list-inside text-gray-300 mt-2">
                <li>Curated movie recommendations based on your preferences.</li>
                <li>Seamless watchlist management to organize your favorite titles.</li>
                <li>Personalized alerts for upcoming releases and trending films.</li>
                
              </ul>
            </section>

            {/* Why Choose Us */}
            <section>
              <h2 className="text-xl font-semibold mb-2">Why Choose Us?</h2>
              <p className="text-gray-300">
                Flimfy stands out because we prioritize your movie-watching experience:
              </p>
              <ul className="list-disc list-inside text-gray-300 mt-2">
                <li>Tailored recommendations powered by advanced AI algorithms.</li>
                <li>Ad-free browsing for a seamless experience.</li>
             
              </ul>
            </section>

            {/* Our Mission */}
            <section>
              <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
              <p className="text-gray-300">
                At Flimfy, our mission is to create a world where movie lovers can:
              </p>
              <ul className="list-disc list-inside text-gray-300 mt-2">
                <li>Effortlessly discover content that aligns with their interests.</li>
                <li>Save time by eliminating the endless search for the "perfect" movie.</li>
        
              </ul>
            </section>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AboutFlimfy;
