import Button from "../components/Button";
import { FirstFold } from "../components/FirstFold";
import Heading from "../elements/Heading";
import Linktag from "../elements/Linktag";
import Text from '../elements/Text'
import Sponsors from "../section/Sponsors";

export default function Home() {
  return (
    <>
      <FirstFold />
      <Sponsors />

      {/* //////TESTING//////// */}
      {/* <Button isSecondary>Documentation</Button>
      <Button sm >Documentation</Button>
      <Button lg >Documentation</Button>
      <Button sm isSecondary >Get Started</Button>
      <Button sm isSecondary >Documentation</Button>
      <Button >Documentation</Button>


      <Linktag isDropdown style="font-thin" >Link</Linktag>
      <Linktag href='./' >Link</Linktag>

      <Heading title={undefined} isLight={undefined} color={undefined} priority={1} >Heading</Heading>
      <Text size="lg">Text</Text> */}
    </>
  );
}
