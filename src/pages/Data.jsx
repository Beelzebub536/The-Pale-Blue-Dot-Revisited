import React from 'react'
import DataCard from '../components/DataCard'

const Data = () => {
  const dataPoints = [
    {
      title: "Glacial Retreat",
      description: "Satellite imagery reveals the dramatic retreat of glaciers worldwide. The Columbia Glacier in Alaska has retreated over 20 kilometers since the 1980s, serving as a stark indicator of climate change.",
      image: "https://images.unsplash.com/photo-1510566337591-4e3e18ed45c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      dataLink: "https://earthobservatory.nasa.gov/world-of-change",
      linkText: "See NASA World of Change"
    },
    {
      title: "Ozone Layer Recovery",
      description: "Thanks to the Montreal Protocol and satellite monitoring by Aura and Nimbus-7, the ozone hole is slowly healing. This represents one of humanity's greatest environmental success stories.",
      image: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      dataLink: "https://ozonewatch.gsfc.nasa.gov/",
      linkText: "Visit NASA Ozone Watch"
    },
    {
      title: "The 2020 Pollution Pause",
      description: "During global lockdowns, NASA satellites recorded unprecedented drops in nitrogen dioxide levels. This natural experiment showed how quickly our atmosphere can recover when emissions decrease.",
      image: "https://images.unsplash.com/photo-1584267385494-9fdd9a71ad75?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      dataLink: "https://earthobservatory.nasa.gov/images/146362/air-pollution-remains-low-as-people-stay-at-home",
      linkText: "View NASA Earth Observatory Data"
    },
    {
      title: "Bangladesh Delta Monitoring",
      description: "The Ganges-Brahmaputra Delta is one of the world's most dynamic landscapes. Using Landsat and Sentinel data, we monitor changes in this vital ecosystem that supports over 100 million people.",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      dataLink: "https://landsat.gsfc.nasa.gov/",
      linkText: "Explore Landsat Data"
    },
    {
      title: "Sea Level Rise",
      description: "NASA's GRACE and Jason satellite missions precisely measure sea level rise, revealing an average increase of 3.4 millimeters per year, with some regions experiencing much faster rates.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      dataLink:"https://sealevel.nasa.gov/",
      linkText: "Check NASA Sea Level Data"
    },
    {
      title: "Deforestation Patterns",
      description: "Decades of satellite observations show the rapid loss of forest cover in critical regions like the Amazon, Congo Basin, and Southeast Asia, highlighting the need for sustainable land management.",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      dataLink: "https://earthobservatory.nasa.gov/features/Deforestation",
      linkText: "Study Deforestation Data"
    }
  ]

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-400 mb-6">
            The Proof Is in the Pixels
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Behind the emotional narrative lies decades of satellite data and scientific observation. 
            Explore the evidence that informs our story.
          </p>
        </div>

        {/* Data Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {dataPoints.map((point, index) => (
            <DataCard
              key={index}
              title={point.title}
              description={point.description}
              image={point.image}
              dataLink={point.dataLink}
              linkText={point.linkText}
            />
          ))}
        </div>

        {/* Methodology Section */}
        <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 max-w-4xl mx-auto fade-in">
          <h2 className="text-2xl font-bold text-blue-400 mb-6">Our Methodology</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Data Sources</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• NASA Landsat Program (1972-Present)</li>
                <li>• ESA Sentinel Missions</li>
                <li>• MODIS Terra/Aqua</li>
                <li>• GRACE Gravity Missions</li>
                <li>• Aura Satellite Ozone Monitoring</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Analysis Techniques</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Multi-spectral Analysis</li>
                <li>• Time-series Comparison</li>
                <li>• Change Detection Algorithms</li>
                <li>• Atmospheric Correction</li>
                <li>• Ground Truth Validation</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 fade-in">
          <p className="text-gray-400 mb-6">
            Want to dive deeper into the data?
          </p>
          <a 
            href="https://earthdata.nasa.gov/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-300"
          >
            Explore NASA's Open Data Portal
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Data