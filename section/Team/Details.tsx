import React from "react";
import Members from "../../components/Team/Members";
import ceo from "../../public/team/image 7ceo.png";
import md from "../../public/team/image 10md.png";
import cto from "../../public/team/imagecto.png";
import UI from "../../public/team/imageui.png";
import chief from '../../public/team/imagecfo.png'
import doe from '../../public/team/imagedoe.png'
import vp from '../../public/team/imagevp.png'
import Sarwar from '../../public/team/imageoperations.png'
import kunal from '../../public/team/imagekunal.png'
import Aswathy from '../../public/team/imagesales.png'
import Gaurav from '../../public/team/image.png'
import atul from '../../public/team/imagecoo.png'

function Details({team}:any) {
  // As Tailwind Doc we cant use as bg-${variable}-500
  return (
    <>
    
      <div className="container mx-auto bg-white">
        {/* <div className="text-center">
          <Heading
            title={undefined}
            isLight={undefined}
            color={undefined}
            priority={2}
          >
            Team
          </Heading>
        </div> */}

        <div className=" team">
          <Members
            profile={ceo}
            bgcolor={"bg-yellow-500"}
            twitterlink={""}
            linkedinlink={""}
            githublink={""}
            name={"Sanket Sahu"}
            designation={"Chief Executive Officer (CEO)"}
          />
          <Members
            profile={md}
            bgcolor={"bg-green-500"}
            twitterlink={""}
            linkedinlink={""}
            githublink={""}
            name={"Kumar Pratik"}
            designation={"Managing Director"}
          />
          <Members
            profile={cto}
            bgcolor={"bg-primary"}
            twitterlink={""}
            linkedinlink={""}
            githublink={""}
            name={"Saurabh Sahu"}
            designation={"Chief Technology Officer (CTO)"}
          />
          <Members
            profile={UI}
            bgcolor={"bg-pink-500"}
            twitterlink={""}
            linkedinlink={""}
            githublink={""}
            name={"Megha Kumari"}
            designation={"Director of UI / UX Design"}
          />
          <Members
            profile={atul}
            bgcolor={"bg-green-500"}
            twitterlink={""}
            linkedinlink={""}
            githublink={""}
            name={"Atul Ranjan"}
            designation={"Chief Operating Officer"}
          />
          <Members
            profile={doe}
            bgcolor={"bg-red-500"}
            twitterlink={""}
            linkedinlink={""}
            githublink={""}
            name={"Varun Kumar Sahu"}
            designation={"Director of Engineering"}
          />
          <Members
            profile={vp}
            bgcolor={"bg-yellow-500"}
            twitterlink={""}
            linkedinlink={""}
            githublink={""}
            name={"Pramada Sahu"}
            designation={"VP People & Business Partnership"}
          />
          <Members
            profile={chief}
            bgcolor={"bg-primary"}
            twitterlink={""}
            linkedinlink={""}
            githublink={""}
            name={"Apoorva Sahu"}
            designation={"Chief Financial Officer (CFO)"}
          />
          <Members
            profile={Sarwar}
            bgcolor={"bg-yellow-400"}
            twitterlink={""}
            linkedinlink={""}
            githublink={""}
            name={"Sarwar Imam"}
            designation={"Senior Manager Operations"}
          />
          <Members
            profile={kunal}
            bgcolor={"bg-green-700"}
            twitterlink={""}
            linkedinlink={""}
            githublink={""}
            name={"Kunal Kumar"}
            designation={"Chief Operating Officer"}
          />
          <Members
            profile={Gaurav}
            twitterlink={""}
            bgcolor={"bg-red-600"}
            linkedinlink={""}
            githublink={""}
            name={"Gaurav Guha"}
            designation={"Vice President Products"}
          />
          <Members
            profile={Aswathy}
            bgcolor={"bg-primary"}
            twitterlink={""}
            linkedinlink={""}
            githublink={""}
            name={"Aswathy Anil"}
            designation={"Vice President Sales & BD"}
          />
        </div>
      </div>
    </>
  );
}

export default Details;
