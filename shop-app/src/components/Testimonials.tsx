import React from "react";
import { Testimonial } from "interfaces";


// Define an array of testimonials
const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "John Doe",
      rating: 5,
      comment: "Excellent service and quality products!"
    },
    {
      id: 2,
      name: "Jane Smith",
      rating: 4,
      comment: "Great selection and fast shipping."
    }
  ];

  // Define a component to render the testimonials
  const Testimonials: React.FC = () => (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Customer Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          // Loop through the testimonials and render a component for each one
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                // Render a yellow star for each rating point
                <div className="flex text-yellow-400">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </div>
              // Render the testimonial comment
              <p className="text-gray-600 mb-4">{testimonial.comment}</p>
              // Render the testimonial name
              <p className="font-semibold">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  export default Testimonials;
