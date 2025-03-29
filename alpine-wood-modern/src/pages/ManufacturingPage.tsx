import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaTools,
  FaRulerCombined,
  FaLayerGroup,
  FaWrench,
  FaWarehouse,
  FaDoorOpen,
  FaPaintRoller,
  FaArrowRight
} from 'react-icons/fa';
import { PageHeader } from '@/components/sections/PageHeader';

interface ManufacturingProcess {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  videoSrc?: string;
  videoThumbnail?: string;
}

const manufacturingProcesses: ManufacturingProcess[] = [
  {
    id: 'design',
    title: 'The design you want starts with an idea, a sketch, a photograph...',
    description: `At Alpine your custom design project begins with an idea from a sketch, a photo, or even a sample of
    antique moulding you want accurately duplicated. Our project managers and designers will work with you to bring
    your project to life, for home or business.

    Once we arrive at the perfect cabinetry, kitchens, architectural doors and millwork design you want, the process
    moves into the various integrated manufacturing stages in-house at Alpine's facility in Marionville. From design
    to manufacturing to installation, we manage each stage of the process to ensure our clients are completely satisfied.`,
    icon: <FaRulerCombined size={28} />,
    videoThumbnail: 'https://ext.same-assets.com/2107189163/3350713907.webp',
    videoSrc: 'https://youtube.com/embed/SIc2Wy-ZYNA'
  },
  {
    id: 'computer-aided-design',
    title: 'Precision Computer Aided Design feeds workflow throughout Alpine\'s manufacturing center',
    description: `From a hand sketch or drawings supplied from a client, Alpine's computer aided design center takes your
    plans and turns them into highly precise computer drawings. The drawing files are read by our integrated machinery
    network to make all precision cuts and to streamline all production.`,
    icon: <FaTools size={28} />,
    videoThumbnail: 'https://ext.same-assets.com/2107189163/1905401508.webp',
    videoSrc: 'https://youtube.com/embed/U1wXRZtLPJM'
  },
  {
    id: 'milling-center',
    title: 'Alpine\'s Milling Center',
    description: `Alpine's Milling equipment is the center for both our residential and commercial cabinetry, for both
    our Euro style and Custom cabinetry.

    A computer drawing is sent to the milling center for precise cutting and milling of every interior part. This all
    happens quickly and efficiently within minutes.

    Alpine incorporates the latest safety equipment for the health of our valued factory employees, such as easy lift
    vacuum systems, so heavy stock can be easily lifted up on to the machine.`,
    icon: <FaWarehouse size={28} />,
    videoThumbnail: 'https://ext.same-assets.com/2107189163/4268018862.webp',
    videoSrc: 'https://youtube.com/embed/ruwz3EBiNJU'
  },
  {
    id: 'edge-banding',
    title: 'Alpine\'s Edge Banding Center',
    description: `From our milling center to our edge bander, parts are efficiently maneuvered to the edge bander where
    they are perfectly banded to complete the process of the interior parts. Efficiency is one of our main goals at Alpine,
    as you see the continuous roller system where one operator can feed the machine as well as offload the parts on the
    return conveyor system.

    This edge bander is also computer controlled so that we can efficiently go from one program to the next with very little
    set up time.`,
    icon: <FaLayerGroup size={28} />,
    videoSrc: 'https://youtube.com/embed/CYMHRtpHCBQ'
  },
  {
    id: 'dowel-insertion',
    title: 'Alpine\'s Dowel Insertion Center',
    description: `Your parts easily flow from one station to the next. Our dowel construction is used on our frameless
    Eurostyle cabinetry. Here you see our machine inserting pre-glued dowels to be processed as the final step before
    assembling our cases.

    This machine is computer controlled, which enables us to go from program to program, without any setup time. The parts
    you see being processed here will quickly be used to build one of our Euro style cases which you'll see being used in
    our case manufacturing video.`,
    icon: <FaWrench size={28} />,
    videoSrc: 'https://youtube.com/embed/0FytueIuZLI'
  },
  {
    id: 'cabinet-case',
    title: 'Alpine\'s Cabinet Case Manufacturing Center',
    description: `Alpine's customers know us as a manufacturer of one of the most durable, well constructed Euro style
    cabinets available in the industry.

    Here we can see assembly of a Euro style cabinet at Alpine's manufacturing center. The assembler is inserting hinge
    plates and glue for the connecting dowels. You can see how the dowels make a perfect alignment on the cabinet ends.

    After he snaps the cabinet together, he puts it inside the hydraulic case clamp which quickly squares the cabinet,
    sets it, and fastens the back.`,
    icon: <FaWarehouse size={28} />,
    videoSrc: 'https://youtube.com/embed/HpjyH0p_XAc'
  },
  {
    id: 'straight-moulding',
    title: 'Alpine\'s Straight Moulding Manufacturing',
    description: `Do you have that special piece of crown mould you need made? Our machine technician is taking a raw piece
    of lumber and turning it into a beautiful piece of crown mould. Alpine's straight moulder equipment can handle any
    standard or custom profile. A customer can also bring us drawing, a photo or a piece of sample trim from a vintage or
    historic home, and have Alpine produce a perfect match of the trim profile.

    Whether it's trim for your cabinets or casework, base or crown mould for your home or business, we can do it all. For more
    unique custom pieces of crown or trim such as ceiling moulding for a circular wall, watch our Radius Moulder in action.`,
    icon: <FaRulerCombined size={28} />,
    videoSrc: 'https://youtube.com/embed/0xnJMliYDiM'
  },
  {
    id: 'radius-moulding',
    title: 'Alpine\'s Custom Radius Moulder Manufacturing',
    description: `We take pride here at Alpine in our ability to make any intricate style arched moulding you would need for
    your home or commercial needs.

    Here we see one of our team members running a 16 foot piece of crown for a radius wall.`,
    icon: <FaRulerCombined size={28} />,
    videoSrc: 'https://youtube.com/embed/V5gIc4FtqHk'
  },
  {
    id: 'door-manufacturing',
    title: 'Alpine\'s Cabinet Door Manufacturing Center',
    description: `Alpine's customers know the benefit in the fact we make all cabinet door orders in-house. This enables us to
    provide the exact door style wanted, that will install correctly, all in a timely manner. We have many door styles to choose
    from, as well as any custom style your plans call for. Here we see one of our teammates creating a custom door. You can see
    him cut the parts, cope the parts and then build this five-piece door. Alpine also does some very custom door units as you
    can see in our Radius Door video.`,
    icon: <FaDoorOpen size={28} />,
    videoSrc: 'https://youtube.com/embed/wZXoWHVXRRc'
  },
  {
    id: 'radius-cabinet',
    title: 'Alpine\'s Radius Cabinet Case',
    description: `Here we see beautiful radius doors that are going on the end of a kitchen island. You can see that we use
    soft-close hinges so that your doors won't slam shut. Once again all radius and case work are produced in-house.`,
    icon: <FaWarehouse size={28} />,
    videoSrc: 'https://youtube.com/embed/8P5h0WR04Z8'
  },
  {
    id: 'architectural-door',
    title: 'Alpine\'s Architectural Door Assembly Center',
    description: `Alpine has a vast collection of architectural designs for any entry way or interior doors. Have an idea for a
    door design you want us to build? Our Architectural Doors project manager and designers will work with you to make your doors
    exactly what you want. Here we can see a beautiful walnut door with custom trim being placed on it. You can see our Craftsmen
    pays close attention to detail. Whether it's a beautiful entry way, doors for a library or custom doors throughout the house,
    our team is ready to build it for you.`,
    icon: <FaDoorOpen size={28} />,
    videoSrc: 'https://youtube.com/embed/WB4w9T1hFZ8'
  },
  {
    id: 'finishing-center',
    title: 'Alpine\'s Finishing Center',
    description: `Where many custom shops have not taken on the difficult task of finishing of the final product, Alpine has
    invested in being able to offer almost any finish the customer desires. Alpine's finishing department is fully equipped to
    handle any painted, stained, glazed, and distressed finishes.`,
    icon: <FaPaintRoller size={28} />,
    videoSrc: 'https://youtube.com/embed/sQ8vENswdY4'
  }
];

export function ManufacturingPage() {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <PageHeader
        title="Alpine's Manufacturing Center. Everything under one roof."
        subtitle="Alpine's self-contained facility means workflow precision and product integrity is maintained at the highest standards throughout the entire design process. We believe not only in the importance of good work values and respect for high standards in quality workmanship, but investing in the latest equipment and technology. This is the foundation of a wide range of custom products we produce for clients in North America."
      />

      {/* Manufacturing Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {manufacturingProcesses.map((process, index) => (
              <motion.div
                key={process.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
              >
                {/* Video or Placeholder */}
                <div className="md:w-1/2">
                  <div className="rounded-lg overflow-hidden shadow-lg aspect-video bg-gray-100">
                    {process.videoSrc ? (
                      <iframe
                        src={process.videoSrc}
                        className="w-full h-full"
                        title={process.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-alpine-tan-light">
                        <div className="text-alpine-brown-dark">Video Coming Soon</div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="md:w-1/2">
                  <div className="flex items-center mb-4">
                    <div className="bg-alpine-brown text-white p-3 rounded-lg mr-4">
                      {process.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-alpine-brown-dark">{process.title}</h3>
                  </div>
                  <div className="text-alpine-gray-dark space-y-4">
                    {process.description.split('\n\n').map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-alpine-tan-light relative">
        <div className="absolute inset-0 opacity-30 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2220%22 height=%2220%22 viewBox=%220 0 20 20%22%3E%3Cpath d=%22M0 0h10v10H0zm10 10h10v10H10z%22 fill=%22%23fff%22 fill-opacity=%22.1%22/%3E%3C/svg%3E')]"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-alpine-brown-dark mb-4">The sky is the limit.</h2>
              <p className="text-lg text-alpine-gray-dark mb-8">
                Have a custom project idea in mind for your dream home or commercial project?
                Alpine is capable of producing a wide variety of selections from a design sketch through to our
                on-premises complete manufacturing facility. For anything related to home interior appointments,
                there is virtually nothing we can't produce for you.
              </p>

              <Link
                to="/team"
                className="inline-flex items-center bg-alpine-brown text-white py-3 px-6 rounded-md hover:bg-alpine-brown-dark transition-colors"
              >
                Talk to an Alpine Team Project Manager
                <FaArrowRight className="ml-2" size={14} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
