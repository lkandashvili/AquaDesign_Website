import { Droplets, Waves, Mountain, Settings } from 'lucide-react';

const services = [
  {
    icon: <Droplets className="w-12 h-12" />,
    title: "Custom Aquariums",
    description: "Bespoke aquarium designs for homes, offices, hotels, and restaurants with state-of-the-art filtration systems.",
    features: ["Freshwater & Saltwater", "Coral Reef Systems", "Automated Maintenance"],
    color: "from-blue-500 to-cyan-400",
  },
  {
    icon: <Waves className="w-12 h-12" />,
    title: "Swimming Pools",
    description: "Design and construction of luxury swimming pools with modern technology and elegant finishes.",
    features: ["Infinity Pools", "Heated Pools", "Smart Control Systems"],
    color: "from-teal-500 to-emerald-400",
  },
  {
    icon: <Mountain className="w-12 h-12" />,
    title: "Natural Lakes",
    description: "Eco-friendly lake and pond design integrated with landscape architecture for estates and parks.",
    features: ["Natural Filtration", "Fish Habitats", "Irrigation Systems"],
    color: "from-green-500 to-cyan-400",
  },
  {
    icon: <Settings className="w-12 h-12" />,
    title: "Maintenance",
    description: "Professional maintenance services to keep your water features pristine and functioning perfectly.",
    features: ["Weekly Service", "Water Testing", "Equipment Repair"],
    color: "from-purple-500 to-pink-400",
  },
];

export default function ServicesShowcase() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Premium Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From intimate home aquariums to expansive landscape water features - we handle every project with precision.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg card-hover border border-gray-100"
            >
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.color} text-white mb-6`}>
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-700">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center gap-2 group">
                View Projects
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}