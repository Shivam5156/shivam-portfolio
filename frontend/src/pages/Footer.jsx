import React from "react";

function Footer() {
    return (
        <footer className="py-8 bg-dark-300 border-t border-white/10">
            <div className="container mx-auto px-6 text-center">

                <p className="text-gray-400 text-sm">
                    © {new Date().getFullYear()} Shivam Singh. All rights reserved.
                </p>

                <p className="text-gray-500 text-xs mt-2">
                    Built with React & Tailwind CSS
                </p>

            </div>
        </footer>
    )
}

export default Footer;