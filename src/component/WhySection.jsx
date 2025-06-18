const WhySection = () => {
  const features = [
    {
      title: "One-Time License",
      description: "Cost-effective licensing model with no recurring fees"
    },
    {
      title: "Scalable and Connectivity Robust Framework",
      description: "Built to grow with your business and maintain reliable connections"
    },
    {
      title: "Graphical Reporting",
      description: "Advanced visualization and reporting capabilities"
    },
    {
      title: "Cloud Ready Open Technology Architecture",
      description: "Modern, flexible architecture ready for cloud deployment"
    },
    {
      title: "Embedded with Enterprise Grade Security",
      description: "Bank-level security integrated throughout the platform"
    },
    {
      title: "Adherence to International and Local Regulatory Compliances",
      description: "Fully compliant with global and local financial regulations"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">Why All-Financial?</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border-l-4 border-blue-600">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <div className="w-6 h-6 border-2 border-blue-600 rounded-full"></div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;