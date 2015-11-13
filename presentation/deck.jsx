import React from "react/addons";

import {
  Appear, BlockQuote, Cite, CodePane, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Quote, Slide, Text
} from "../src/spectacle";

import preloader from "../src/utils/preloader";

import Interactive from "./interactive";

const images = {
  city: require("./city.jpg"),
  kat: require("./kat.png"),
  logo: require("./formidable-logo.svg")
};

preloader([images.city, images.kat]);

export default class extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={800} progress="bar" >

      <Slide transition={["zoom"]} bgColor="primary">

          <Heading size={2} fit caps lineHeight={1} textColor="white">
            Repensando
          </Heading>

          <Heading size={1} fit caps>
            automação
          </Heading>

          <Heading size={2} fit caps textColor="white">
            NPM to rule them all!
          </Heading>

          <Link href="http://matheusbrasil.com/">
            <Text bold caps textColor="tertiary">@mabrasil</Text>
          </Link>
          <Text textSize="1.5em" margin="20px 0px 0px" bold>#nug-ce</Text>
        </Slide>

        <Slide transition={["slide"]} bgColor="tertiary" >

          <Heading size={1} fit caps textColor="primary">
            Slides disponíveis em:
          </Heading>

          <Heading size={6} fit >
            http://bit.ly/nug-ce
          </Heading>

        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">

          <Text textSize="5em" margin="20px 0px 0px" bold caps textColor="tertiary">Eu sou:</Text>

          <List>
            <ListItem><Appear fid="1">Unix Philosopher</Appear></ListItem>
            <ListItem><Appear fid="2">Sommelier de linguagens de programação</Appear></ListItem>
            <ListItem><Appear fid="3">Alquimista da vida</Appear></ListItem>
            <ListItem><Appear fid="4">Estudante de Informática no IFCE </Appear></ListItem>
          </List>
        </Slide>

      </Deck>
    );
  }
}
