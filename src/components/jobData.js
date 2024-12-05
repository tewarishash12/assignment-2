const jobsData = [
    {
        jobRole: "Software Engineer",
        workType: "Remote",
        salary: "₹10,00,000 - ₹15,00,000",
        companyIcon: "https://w7.pngwing.com/pngs/732/34/png-transparent-logo-amazon-com-brand-flipkart-others-text-orange-logo-thumbnail.png",
        companyName: "Tech Solutions",
        location: "Bangalore, India",
    },
    {
        jobRole: "Product Manager",
        workType: "Onsite",
        salary: "₹20,00,000 - ₹25,00,000",
        companyIcon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToLyvBPLaS-gaGxgS6H4OBjDqGse-w7Pp8eA&s",
        companyName: "Innovate Corp",
        location: "Mumbai, India",
    },
    {
        jobRole: "Data Scientist",
        workType: "Hybrid",
        salary: "₹18,00,000 - ₹22,00,000",
        companyIcon: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLzu9XoqapolBl9WzFySpp8DMlQnUpqdn-dA&s
`,
        companyName: "Data Insights",
        location: "Pune, India",
    },
    {
        jobRole: "UI/UX Designer",
        workType: "Remote",
        salary: "₹8,00,000 - ₹12,00,000",
        companyIcon: "https://w7.pngwing.com/pngs/732/34/png-transparent-logo-amazon-com-brand-flipkart-others-text-orange-logo-thumbnail.png",
        companyName: "Creative Minds",
        location: "Hyderabad, India",
    },
    {
        jobRole: "Marketing Specialist",
        workType: "Onsite",
        salary: "₹6,00,000 - ₹9,00,000",
        companyIcon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToLyvBPLaS-gaGxgS6H4OBjDqGse-w7Pp8eA&s",
        companyName: "Market Leaders",
        location: "Delhi, India",
    },
    {
        jobRole: "Full-Stack Developer",
        workType: "Remote",
        salary: "₹12,00,000 - ₹18,00,000",
        companyIcon: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLzu9XoqapolBl9WzFySpp8DMlQnUpqdn-dA&s
`,
        companyName: "WebWorks",
        location: "Chennai, India",
    },
    {
        jobRole: "DevOps Engineer",
        workType: "Hybrid",
        salary: "₹14,00,000 - ₹20,00,000",
        companyIcon: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Ford-Motor-Company-Logo.png",
        companyName: "Cloud Masters",
        location: "Gurgaon, India",
    },
    {
        jobRole: "Business Analyst",
        workType: "Onsite",
        salary: "₹9,00,000 - ₹14,00,000",
        companyIcon: `https://static.vecteezy.com/system/resources/thumbnails/016/460/772/small_2x/lenovo-company-logo-with-realistic-shadow-popular-computer-and-laptop-manufacturing-companies-logotype-free-png.png`,
        companyName: "Analyze Pro",
        location: "Kolkata, India",
    },
    {
        jobRole: "Machine Learning Engineer",
        workType: "Remote",
        salary: "₹15,00,000 - ₹25,00,000",
        companyIcon: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Ford-Motor-Company-Logo.png",
        companyName: "AI Revolution",
        location: "Bangalore, India",
    },
    {
        jobRole: "Cybersecurity Analyst",
        workType: "Onsite",
        salary: "₹10,00,000 - ₹16,00,000",
        companyIcon: `https://static.vecteezy.com/system/resources/thumbnails/016/460/772/small_2x/lenovo-company-logo-with-realistic-shadow-popular-computer-and-laptop-manufacturing-companies-logotype-free-png.png`,
        companyName: "SecureTech",
        location: "Noida, India",
    },
    {
        jobRole: "Software Engineer",
        workType: "Remote",
        salary: "₹10,00,000 - ₹15,00,000",
        companyIcon: "https://w7.pngwing.com/pngs/732/34/png-transparent-logo-amazon-com-brand-flipkart-others-text-orange-logo-thumbnail.png",
        companyName: "Tech Solutions",
        location: "Bangalore, India",
    },
    {
        jobRole: "Product Manager",
        workType: "Onsite",
        salary: "₹20,00,000 - ₹25,00,000",
        companyIcon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToLyvBPLaS-gaGxgS6H4OBjDqGse-w7Pp8eA&s",
        companyName: "Innovate Corp",
        location: "Mumbai, India",
    },
    {
        jobRole: "Data Scientist",
        workType: "Hybrid",
        salary: "₹18,00,000 - ₹22,00,000",
        companyIcon: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLzu9XoqapolBl9WzFySpp8DMlQnUpqdn-dA&s
`,
        companyName: "Data Insights",
        location: "Pune, India",
    },
    {
        jobRole: "UI/UX Designer",
        workType: "Remote",
        salary: "₹8,00,000 - ₹12,00,000",
        companyIcon: "https://w7.pngwing.com/pngs/732/34/png-transparent-logo-amazon-com-brand-flipkart-others-text-orange-logo-thumbnail.png",
        companyName: "Creative Minds",
        location: "Hyderabad, India",
    },
    {
        jobRole: "Marketing Specialist",
        workType: "Onsite",
        salary: "₹6,00,000 - ₹9,00,000",
        companyIcon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToLyvBPLaS-gaGxgS6H4OBjDqGse-w7Pp8eA&s",
        companyName: "Market Leaders",
        location: "Delhi, India",
    },
    {
        jobRole: "Full-Stack Developer",
        workType: "Remote",
        salary: "₹12,00,000 - ₹18,00,000",
        companyIcon: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLzu9XoqapolBl9WzFySpp8DMlQnUpqdn-dA&s
`,
        companyName: "WebWorks",
        location: "Chennai, India",
    },
    {
        jobRole: "DevOps Engineer",
        workType: "Hybrid",
        salary: "₹14,00,000 - ₹20,00,000",
        companyIcon: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Ford-Motor-Company-Logo.png",
        companyName: "Cloud Masters",
        location: "Gurgaon, India",
    },
    {
        jobRole: "Business Analyst",
        workType: "Onsite",
        salary: "₹9,00,000 - ₹14,00,000",
        companyIcon: `https://static.vecteezy.com/system/resources/thumbnails/016/460/772/small_2x/lenovo-company-logo-with-realistic-shadow-popular-computer-and-laptop-manufacturing-companies-logotype-free-png.png`,
        companyName: "Analyze Pro",
        location: "Kolkata, India",
    },
    {
        jobRole: "Machine Learning Engineer",
        workType: "Remote",
        salary: "₹15,00,000 - ₹25,00,000",
        companyIcon: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Ford-Motor-Company-Logo.png",
        companyName: "AI Revolution",
        location: "Bangalore, India",
    },
    {
        jobRole: "Cybersecurity Analyst",
        workType: "Onsite",
        salary: "₹10,00,000 - ₹16,00,000",
        companyIcon: `https://static.vecteezy.com/system/resources/thumbnails/016/460/772/small_2x/lenovo-company-logo-with-realistic-shadow-popular-computer-and-laptop-manufacturing-companies-logotype-free-png.png`,
        companyName: "SecureTech",
        location: "Noida, India",
    },
    {
        jobRole: "Software Engineer",
        workType: "Remote",
        salary: "₹10,00,000 - ₹15,00,000",
        companyIcon: "https://w7.pngwing.com/pngs/732/34/png-transparent-logo-amazon-com-brand-flipkart-others-text-orange-logo-thumbnail.png",
        companyName: "Tech Solutions",
        location: "Bangalore, India",
    },
    {
        jobRole: "Product Manager",
        workType: "Onsite",
        salary: "₹20,00,000 - ₹25,00,000",
        companyIcon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToLyvBPLaS-gaGxgS6H4OBjDqGse-w7Pp8eA&s",
        companyName: "Innovate Corp",
        location: "Mumbai, India",
    },
    {
        jobRole: "Data Scientist",
        workType: "Hybrid",
        salary: "₹18,00,000 - ₹22,00,000",
        companyIcon: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLzu9XoqapolBl9WzFySpp8DMlQnUpqdn-dA&s
`,
        companyName: "Data Insights",
        location: "Pune, India",
    },
    {
        jobRole: "UI/UX Designer",
        workType: "Remote",
        salary: "₹8,00,000 - ₹12,00,000",
        companyIcon: "https://w7.pngwing.com/pngs/732/34/png-transparent-logo-amazon-com-brand-flipkart-others-text-orange-logo-thumbnail.png",
        companyName: "Creative Minds",
        location: "Hyderabad, India",
    },
    {
        jobRole: "Marketing Specialist",
        workType: "Onsite",
        salary: "₹6,00,000 - ₹9,00,000",
        companyIcon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToLyvBPLaS-gaGxgS6H4OBjDqGse-w7Pp8eA&s",
        companyName: "Market Leaders",
        location: "Delhi, India",
    },
    {
        jobRole: "Full-Stack Developer",
        workType: "Remote",
        salary: "₹12,00,000 - ₹18,00,000",
        companyIcon: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLzu9XoqapolBl9WzFySpp8DMlQnUpqdn-dA&s
`,
        companyName: "WebWorks",
        location: "Chennai, India",
    },
    {
        jobRole: "DevOps Engineer",
        workType: "Hybrid",
        salary: "₹14,00,000 - ₹20,00,000",
        companyIcon: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Ford-Motor-Company-Logo.png",
        companyName: "Cloud Masters",
        location: "Gurgaon, India",
    },
    {
        jobRole: "Business Analyst",
        workType: "Onsite",
        salary: "₹9,00,000 - ₹14,00,000",
        companyIcon: `https://static.vecteezy.com/system/resources/thumbnails/016/460/772/small_2x/lenovo-company-logo-with-realistic-shadow-popular-computer-and-laptop-manufacturing-companies-logotype-free-png.png`,
        companyName: "Analyze Pro",
        location: "Kolkata, India",
    },
    {
        jobRole: "Machine Learning Engineer",
        workType: "Remote",
        salary: "₹15,00,000 - ₹25,00,000",
        companyIcon: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Ford-Motor-Company-Logo.png",
        companyName: "AI Revolution",
        location: "Bangalore, India",
    },
    {
        jobRole: "Cybersecurity Analyst",
        workType: "Onsite",
        salary: "₹10,00,000 - ₹16,00,000",
        companyIcon: `https://static.vecteezy.com/system/resources/thumbnails/016/460/772/small_2x/lenovo-company-logo-with-realistic-shadow-popular-computer-and-laptop-manufacturing-companies-logotype-free-png.png`,
        companyName: "SecureTech",
        location: "Noida, India",
    },
    {
        jobRole: "Software Engineer",
        workType: "Remote",
        salary: "₹10,00,000 - ₹15,00,000",
        companyIcon: "https://w7.pngwing.com/pngs/732/34/png-transparent-logo-amazon-com-brand-flipkart-others-text-orange-logo-thumbnail.png",
        companyName: "Tech Solutions",
        location: "Bangalore, India",
    },
    {
        jobRole: "Product Manager",
        workType: "Onsite",
        salary: "₹20,00,000 - ₹25,00,000",
        companyIcon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToLyvBPLaS-gaGxgS6H4OBjDqGse-w7Pp8eA&s",
        companyName: "Innovate Corp",
        location: "Mumbai, India",
    },
    {
        jobRole: "Data Scientist",
        workType: "Hybrid",
        salary: "₹18,00,000 - ₹22,00,000",
        companyIcon: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLzu9XoqapolBl9WzFySpp8DMlQnUpqdn-dA&s
`,
        companyName: "Data Insights",
        location: "Pune, India",
    },
    {
        jobRole: "UI/UX Designer",
        workType: "Remote",
        salary: "₹8,00,000 - ₹12,00,000",
        companyIcon: "https://w7.pngwing.com/pngs/732/34/png-transparent-logo-amazon-com-brand-flipkart-others-text-orange-logo-thumbnail.png",
        companyName: "Creative Minds",
        location: "Hyderabad, India",
    },
    {
        jobRole: "Marketing Specialist",
        workType: "Onsite",
        salary: "₹6,00,000 - ₹9,00,000",
        companyIcon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToLyvBPLaS-gaGxgS6H4OBjDqGse-w7Pp8eA&s",
        companyName: "Market Leaders",
        location: "Delhi, India",
    },
    {
        jobRole: "Full-Stack Developer",
        workType: "Remote",
        salary: "₹12,00,000 - ₹18,00,000",
        companyIcon: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLzu9XoqapolBl9WzFySpp8DMlQnUpqdn-dA&s
`,
        companyName: "WebWorks",
        location: "Chennai, India",
    },
    {
        jobRole: "DevOps Engineer",
        workType: "Hybrid",
        salary: "₹14,00,000 - ₹20,00,000",
        companyIcon: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Ford-Motor-Company-Logo.png",
        companyName: "Cloud Masters",
        location: "Gurgaon, India",
    },
    {
        jobRole: "Business Analyst",
        workType: "Onsite",
        salary: "₹9,00,000 - ₹14,00,000",
        companyIcon: `https://static.vecteezy.com/system/resources/thumbnails/016/460/772/small_2x/lenovo-company-logo-with-realistic-shadow-popular-computer-and-laptop-manufacturing-companies-logotype-free-png.png`,
        companyName: "Analyze Pro",
        location: "Kolkata, India",
    },
    {
        jobRole: "Machine Learning Engineer",
        workType: "Remote",
        salary: "₹15,00,000 - ₹25,00,000",
        companyIcon: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Ford-Motor-Company-Logo.png",
        companyName: "AI Revolution",
        location: "Bangalore, India",
    },
    {
        jobRole: "Cybersecurity Analyst",
        workType: "Onsite",
        salary: "₹10,00,000 - ₹16,00,000",
        companyIcon: `https://static.vecteezy.com/system/resources/thumbnails/016/460/772/small_2x/lenovo-company-logo-with-realistic-shadow-popular-computer-and-laptop-manufacturing-companies-logotype-free-png.png`,
        companyName: "SecureTech",
        location: "Noida, India",
    },
    {
        jobRole: "Software Engineer",
        workType: "Remote",
        salary: "₹10,00,000 - ₹15,00,000",
        companyIcon: "https://w7.pngwing.com/pngs/732/34/png-transparent-logo-amazon-com-brand-flipkart-others-text-orange-logo-thumbnail.png",
        companyName: "Tech Solutions",
        location: "Bangalore, India",
    },
    {
        jobRole: "Product Manager",
        workType: "Onsite",
        salary: "₹20,00,000 - ₹25,00,000",
        companyIcon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToLyvBPLaS-gaGxgS6H4OBjDqGse-w7Pp8eA&s",
        companyName: "Innovate Corp",
        location: "Mumbai, India",
    },
    {
        jobRole: "Data Scientist",
        workType: "Hybrid",
        salary: "₹18,00,000 - ₹22,00,000",
        companyIcon: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLzu9XoqapolBl9WzFySpp8DMlQnUpqdn-dA&s
`,
        companyName: "Data Insights",
        location: "Pune, India",
    },
    {
        jobRole: "UI/UX Designer",
        workType: "Remote",
        salary: "₹8,00,000 - ₹12,00,000",
        companyIcon: "https://w7.pngwing.com/pngs/732/34/png-transparent-logo-amazon-com-brand-flipkart-others-text-orange-logo-thumbnail.png",
        companyName: "Creative Minds",
        location: "Hyderabad, India",
    },
    {
        jobRole: "Marketing Specialist",
        workType: "Onsite",
        salary: "₹6,00,000 - ₹9,00,000",
        companyIcon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToLyvBPLaS-gaGxgS6H4OBjDqGse-w7Pp8eA&s",
        companyName: "Market Leaders",
        location: "Delhi, India",
    },
    {
        jobRole: "Full-Stack Developer",
        workType: "Remote",
        salary: "₹12,00,000 - ₹18,00,000",
        companyIcon: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLzu9XoqapolBl9WzFySpp8DMlQnUpqdn-dA&s
`,
        companyName: "WebWorks",
        location: "Chennai, India",
    },
    {
        jobRole: "DevOps Engineer",
        workType: "Hybrid",
        salary: "₹14,00,000 - ₹20,00,000",
        companyIcon: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Ford-Motor-Company-Logo.png",
        companyName: "Cloud Masters",
        location: "Gurgaon, India",
    },
    {
        jobRole: "Business Analyst",
        workType: "Onsite",
        salary: "₹9,00,000 - ₹14,00,000",
        companyIcon: `https://static.vecteezy.com/system/resources/thumbnails/016/460/772/small_2x/lenovo-company-logo-with-realistic-shadow-popular-computer-and-laptop-manufacturing-companies-logotype-free-png.png`,
        companyName: "Analyze Pro",
        location: "Kolkata, India",
    },
    {
        jobRole: "Machine Learning Engineer",
        workType: "Remote",
        salary: "₹15,00,000 - ₹25,00,000",
        companyIcon: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Ford-Motor-Company-Logo.png",
        companyName: "AI Revolution",
        location: "Bangalore, India",
    },
    {
        jobRole: "Cybersecurity Analyst",
        workType: "Onsite",
        salary: "₹10,00,000 - ₹16,00,000",
        companyIcon: `https://static.vecteezy.com/system/resources/thumbnails/016/460/772/small_2x/lenovo-company-logo-with-realistic-shadow-popular-computer-and-laptop-manufacturing-companies-logotype-free-png.png`,
        companyName: "SecureTech",
        location: "Noida, India",
    },
    {
        jobRole: "Software Engineer",
        workType: "Remote",
        salary: "₹10,00,000 - ₹15,00,000",
        companyIcon: "https://w7.pngwing.com/pngs/732/34/png-transparent-logo-amazon-com-brand-flipkart-others-text-orange-logo-thumbnail.png",
        companyName: "Tech Solutions",
        location: "Bangalore, India",
    },
    {
        jobRole: "Product Manager",
        workType: "Onsite",
        salary: "₹20,00,000 - ₹25,00,000",
        companyIcon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToLyvBPLaS-gaGxgS6H4OBjDqGse-w7Pp8eA&s",
        companyName: "Innovate Corp",
        location: "Mumbai, India",
    },
    {
        jobRole: "Data Scientist",
        workType: "Hybrid",
        salary: "₹18,00,000 - ₹22,00,000",
        companyIcon: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLzu9XoqapolBl9WzFySpp8DMlQnUpqdn-dA&s
`,
        companyName: "Data Insights",
        location: "Pune, India",
    },
    {
        jobRole: "UI/UX Designer",
        workType: "Remote",
        salary: "₹8,00,000 - ₹12,00,000",
        companyIcon: "https://w7.pngwing.com/pngs/732/34/png-transparent-logo-amazon-com-brand-flipkart-others-text-orange-logo-thumbnail.png",
        companyName: "Creative Minds",
        location: "Hyderabad, India",
    },
    {
        jobRole: "Marketing Specialist",
        workType: "Onsite",
        salary: "₹6,00,000 - ₹9,00,000",
        companyIcon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToLyvBPLaS-gaGxgS6H4OBjDqGse-w7Pp8eA&s",
        companyName: "Market Leaders",
        location: "Delhi, India",
    },
    {
        jobRole: "Full-Stack Developer",
        workType: "Remote",
        salary: "₹12,00,000 - ₹18,00,000",
        companyIcon: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLzu9XoqapolBl9WzFySpp8DMlQnUpqdn-dA&s
`,
        companyName: "WebWorks",
        location: "Chennai, India",
    },
    {
        jobRole: "DevOps Engineer",
        workType: "Hybrid",
        salary: "₹14,00,000 - ₹20,00,000",
        companyIcon: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Ford-Motor-Company-Logo.png",
        companyName: "Cloud Masters",
        location: "Gurgaon, India",
    },
    {
        jobRole: "Business Analyst",
        workType: "Onsite",
        salary: "₹9,00,000 - ₹14,00,000",
        companyIcon: `https://static.vecteezy.com/system/resources/thumbnails/016/460/772/small_2x/lenovo-company-logo-with-realistic-shadow-popular-computer-and-laptop-manufacturing-companies-logotype-free-png.png`,
        companyName: "Analyze Pro",
        location: "Kolkata, India",
    },
    {
        jobRole: "Machine Learning Engineer",
        workType: "Remote",
        salary: "₹15,00,000 - ₹25,00,000",
        companyIcon: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Ford-Motor-Company-Logo.png",
        companyName: "AI Revolution",
        location: "Bangalore, India",
    },
    {
        jobRole: "Cybersecurity Analyst",
        workType: "Onsite",
        salary: "₹10,00,000 - ₹16,00,000",
        companyIcon: `https://static.vecteezy.com/system/resources/thumbnails/016/460/772/small_2x/lenovo-company-logo-with-realistic-shadow-popular-computer-and-laptop-manufacturing-companies-logotype-free-png.png`,
        companyName: "SecureTech",
        location: "Noida, India",
    },
];

export default jobsData;
