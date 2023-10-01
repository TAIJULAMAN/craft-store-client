import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./AboutCraft.css";

// import { useState } from "react";
const AboutCraft = () => {
  // const [selectedTab, setSelectedTab] = useState(0);

  return (
    <Tabs className=" my-6 ">
      <TabList className="text-center p-5 bg-cyan-200">
        <h1 className="text-4xl font-semibold text-orange-500">About Crafts.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo sunt
          tempore similique sint, earum beatae accusamus non reprehenderit vero
          neque perferendis et. Consectetur accusantium, numquam minima fuga qui
          officia! Velit eligendi maiores consequuntur. Delectus vitae obcaecati
          eligendi nam rerum vel sed! Quos quas inventore veritatis doloremque
          sed officia, corrupti fuga!
        </p>
      </TabList>
      <TabList>
        <Tab>Paper Craft</Tab>
        <Tab> Sewing</Tab>
        <Tab>Woodworking</Tab>
        <Tab>Pottery</Tab>
        <Tab>Decorative arts</Tab>
      </TabList>
      {/* paper craft */}
      <TabPanel className="my-4">
        <h1 className="text-4xl text-yellow-600">Is paper craft an art?</h1>
        <p>
          {" "}
          Paper craft has an aesthetic, educational and therapeutic value. This
          art form is particularly popular with children because it is so
          approachable. It strengthens understanding of geometry, develops
          problem solving skills, promotes multi-cultural awareness, teaches
          patience and following instructions.
        </p>
        <img src="https://i.ibb.co/b2svkmB/dahlias-large.webp" alt="" />
        <p className="text-4xl text-yellow-500">
          What Crafts Can You Make With Paper?
        </p>
        <ul>
          <li>Paper Ball Garland</li>
          <li>Flamingo Craft</li>
          <li>Paper Flowers</li>
          <li>Fruit Slice Bookmarks</li>
          <li>Paper Wreath</li>
          <li>3D Paper Stars</li>
          <li>Toilet Roll Creatures</li>
          <li>Beaded Paper Butterflies</li>
          <li>Paper Chain Snake</li>
          <li>Paper Beads</li>
        </ul>
      </TabPanel>
      {/*  sewing */}
      <TabPanel className="my-4">
        <h1 className="text-4xl text-yellow-600">What is a craft of sewing?</h1>
        <p>
          {" "}
          Sewing is the craft of fastening or attaching objects using stitches
          made with a sewing needle and thread. Sewing is one of the oldest of
          the textile arts, arising in the Paleolithic era.
        </p>
        <img
          className="w-1/2"
          src="https://i.ibb.co/7ym1tFv/five-basic-stitches-in-cross-stitch-983962-hero-cb295ce8c67946e5b1ec06741f84ea0b.jpg"
          alt=""
        />
        <p className="text-4xl text-yellow-500">
          What Crafts Can You Make With Sewing?
        </p>
        <ul>
          <li>Embroidery</li>
          <li>Chain stitch</li>
          <li>Appliqué</li>
          <li>Quilting</li>
          <li>Knitting</li>
          <li>Patchwork</li>
          <li>tapestry</li>
          <li>Cross-stitch</li>
          <li>Needlepoint</li>
        </ul>
      </TabPanel>
      {/* Woodworking */}
      <TabPanel className="my-4">
        <h1 className="text-4xl text-yellow-600">What is woodwork craft?</h1>
        <p>
          {" "}
          Skill and practice in anything relating to the woods and especially in
          maintaining oneself and making one is way in the woods.Skill in
          shaping or constructing articles from wood.
        </p>
        <img
          className="w-1/2"
          src="https://i.ibb.co/rMsLCF2/cherished-bliss-wooden-arrows.jpg"
          alt=""
        />
        <p className="text-4xl text-yellow-500">
          What Crafts Can You Make With wood?
        </p>
        <ul>
          <li> Wooden signs.</li>
          <li>Childrens blocks.</li>
          <li>Picture frames.</li>
          <li>Boxes.</li>
          <li>Furniture.</li>
          <li>Kitchen products.</li>
          <li>Wood pallets.</li>
        </ul>
      </TabPanel>
      {/* Pottery */}
      <TabPanel className="my-4">
        <h1 className="text-4xl text-yellow-600">What is Pottery craft?</h1>
        <p>
          {" "}
          Pottery is the process and the products of forming vessels and other
          objects with clay and other raw materials, which are fired at high
          temperatures to give them a hard and durable form. The place where
          such wares are made by a potter is also called a pottery.
        </p>
        <img
          className="w-1/2"
          src="https://i.ibb.co/j5JGSJs/Getty-Images-478319994-4b90743d15634560acd7c4ba383810df.jpg"
          alt=""
        />
        <p className="text-4xl text-yellow-500">
          What are the four 4 types of pottery?
        </p>
        <ul>
          <li> Earthenware.</li>
          <li> Stoneware.</li>
          <li> Porcelain.</li>
          <li> Ball clay.</li>
        </ul>
      </TabPanel>
      {/* decorative art */}
      <TabPanel className="my-4">
        <h1 className="text-4xl text-yellow-600">What is decorative arts?</h1>
        <p>
          {" "}
          The decorative arts are arts or crafts whose object is the design and
          manufacture of objects that are both beautiful and functional. It
          includes most of the arts making objects for the interiors of
          buildings, and interior design, but not usually architecture
        </p>
        <img
          className="w-1/2"
          src="https://i.ibb.co/bBSmTs1/decorative-art-thumbnail.jpg"
          alt=""
        />
        <p className="text-4xl text-yellow-500">
          What are the types of decorative arts?
        </p>
        <ul>
          <li> Ceramics.</li>
          <li> Metal work.</li>
          <li> Glass.</li>
          <li> Textile.</li>
        </ul>
      </TabPanel>
    </Tabs>
  );
};

export default AboutCraft;
