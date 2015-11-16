import React from "react/addons";

import {
  Appear, BlockQuote, Cite, CodePane, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Quote, Slide, Text
} from "../src/spectacle";

import preloader from "../src/utils/preloader";

import Interactive from "./interactive";

const images = {
  automation: require("./img/gifs/automation.gif")
  ,mind_blowing: require("./img/gifs/mind-blowing.gif")
  ,put_your_hands_up: require("./img/gifs/put-your-hands-up.gif")
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

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">

          <Text textSize="5em" margin="20px 0px 0px" bold caps textColor="tertiary">'Cês podem me achar:</Text>

          <List>
            <ListItem><Appear fid="1">twitter/@mabrasil_io</Appear></ListItem>
            <ListItem><Appear fid="2">github/mabrasil</Appear></ListItem>
            <ListItem><Appear fid="3">mabrasil.rocks</Appear></ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">

          <Text textSize="5em" margin="20px 0px 0px" bold caps textColor="tertiary">Vamos falar de:</Text>

          <List>
            <ListItem><Appear fid="1">Automação?</Appear></ListItem>
            <ListItem><Appear fid="2">O que usamos (e amamos)</Appear></ListItem>
            <ListItem><Appear fid="3">"Problemas" com coisas que amamos</Appear></ListItem>
            <ListItem><Appear fid="4">E se...</Appear></ListItem>
            <ListItem><Appear fid="5">Galero usa?</Appear></ListItem>
          </List>
        </Slide>

        <Slide transition={["slide"]} bgImage={images.automation.replace("/", "")} bgDarken={0.75}>
          <Heading size={2} caps fit textColor="tertiary">
            Automação
          </Heading>
          <Heading size={5} caps fit textColor="primary">
            ???
          </Heading>
        </Slide>

        <Slide transition={["fade"]} bgImage={images.put_your_hands_up.replace("/", "")} bgDarken={0.75}>

          <Text textSize="5em" margin="20px 0px 0px" bold caps textColor="tertiary">Quem aqui precisa fazer?</Text>

          <List>
            <ListItem><Appear fid="1">Pré-processamento, concatenação, minificação e compressão de JS?</Appear></ListItem>
            <ListItem><Appear fid="2">Pré-processamento/compilação de CSS</Appear></ListItem>
            <ListItem><Appear fid="3">Geração de HTML (Template Engines/Static Gens)</Appear></ListItem>
            <ListItem><Appear fid="4">Gerenciamento/Otimização de Imagens</Appear></ListItem>
            <ListItem><Appear fid="5">Testes/Reports</Appear></ListItem>
            <ListItem><Appear fid="6">...</Appear></ListItem>
          </List>
        </Slide>

      </Deck>
    );
  }
}
