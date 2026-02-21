import React from 'react';

export const About: React.FC = () => {
    return (
        <div className="min-h-screen bg-[#F2F0E9] pt-32 pb-20 px-6">
            <div className="max-w-4xl mx-auto">
                <h1 className="font-serif text-6xl text-earth mb-8">Our Story</h1>
                <div className="prose prose-stone lg:prose-xl font-sans text-earth/80 space-y-6">
                    <p>
                        The House Sparrow was once the most common bird in India, living in every nook and cranny of our homes.
                        Today, they are disappearing from our urban landscapes.
                    </p>
                    <p>
                        SPARROW GUARDIANS is a movement dedicated to restoring the harmony between humans and these tiny urban dwellers.
                        We provide education, resources, and a community for those who wish to see the sparrow return to our cities.
                    </p>
                </div>
            </div>
        </div>
    );
};
