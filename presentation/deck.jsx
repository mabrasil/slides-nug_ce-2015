import React from "react/addons";

import {
  Appear, BlockQuote, Cite, CodePane, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Quote, Slide, Text
} from "../src/spectacle";

import preloader from "../src/utils/preloader";

import Interactive from "./interactive";

const images = {
  automation: require("./img/gifs/automation.gif")
  ,communities: require("./img/other/communities.png")
  ,ciço: require("./img/other/ciço.png")
  ,mind_blowing: require("./img/gifs/mind-blowing.gif")
  ,put_your_hands_up: require("./img/gifs/put-your-hands-up.gif")
  ,task_runners: require("./img/other/task-runners.png")
  ,but_what: require("./img/gifs/but-what.gif")
  ,plugins: require("./img/other/plugins-hell.png")
  ,surprises: require("./img/other/surprises.png")
  ,substack1: require("./img/other/substack1.jpg")
  ,substack2: require("./img/other/substack2.jpg")
  ,too_complicated: require("./img/other/too-complicated.png")
  ,npm: require("./img/logos/npm-bg.png")
  ,npm_seldo: require("./img/other/seldo.jpg")
  ,npm_scripts: require("./img/other/script-object.png")
  ,imagination: require("./img/other/trippin.jpg")
  ,confused: require("./img/gifs/confused.gif")
  ,automation_by_substack: require("./img/other/automation-by-substack.png")
  ,automation_by_addy: require("./img/other/automation-by-addy.png")
  ,thinking: require("./img/gifs/thinking.gif")
  ,finish: require("./img/gifs/thats-all-folks.gif")
};

preloader([images.city, images.kat]);

export default class extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={800} progress="bar" >

      {/* The reason why I'll be fast */}

      <Slide transition={["slide"]} bgColor="primary">
        <Heading size={1} textColor="secondary">
          !
        </Heading>
      </Slide>

      <Slide transition={["zoom", "fade"]} bgColor="white">

        <Image width = "100%" src={images.ciço}/>

      </Slide>

      {/* Cover */}

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

        {/* About me */}

        <Slide transition={["zoom"]} bgColor="secondary" textColor="primary">

          <Text textSize="5em" margin="20px 0px 0px" bold caps textColor="tertiary">Eu sou:</Text>

          <List>
            <ListItem><Appear fid="1">Unix Philosopher</Appear></ListItem>
            <ListItem><Appear fid="2">Sommelier de linguagens de programação</Appear></ListItem>
            <ListItem><Appear fid="3">Alquimista da vida</Appear></ListItem>
            <ListItem><Appear fid="4">Estudante de Informática no IFCE </Appear></ListItem>
            <ListItem><Appear fid="4">E... </Appear></ListItem>
          </List>
        </Slide>

        <Slide transition={["slide", "fade"]} bgColor="white">

          <Text textSize="3em" margin="20px 0px 0px" bold caps textColor="primary">Um apaixonado por comunidades!</Text>

          <Image width = "75%" src={images.communities}/>

        </Slide>

        <Slide transition={["slide"]} bgColor="secondary" textColor="primary">

          <Text textSize="5em" margin="20px 0px 0px" bold caps textColor="tertiary">'Cês podem me achar:</Text>

          <List>
            <ListItem><Appear fid="1">twitter/@mabrasil_io</Appear></ListItem>
            <ListItem><Appear fid="2">github/mabrasil</Appear></ListItem>
            <ListItem><Appear fid="3">mabrasil.rocks</Appear></ListItem>
          </List>
        </Slide>

        {/* Index */}

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

        {/* Why we do automation? */}

        <Slide transition={["fade"]} bgImage={images.automation.replace("/", "")} bgDarken={0.75}>
          <Heading size={2} fit caps lineHeight={1} textColor="primary">
            Automação???
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgImage={images.put_your_hands_up.replace("/", "")} bgDarken={0.75}>

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

        {/* Tools */}

        <Slide transition={["fade"]} bgImage={images.automation.replace("/", "")} bgDarken={0.75}>
          <Heading size={2} fit caps lineHeight={1} textColor="primary">
            O que usamos???
          </Heading>
        </Slide>

        <Slide transition={["zoom", "fade"]} bgColor="white">

          <Image width="70%" src={images.task_runners}/>

          <Heading>...</Heading>

        </Slide>

        {/* The problems */}

        <Slide transition={["slide"]} bgImage={images.but_what.replace("/", "")} bgDarken={0.75}>
          <Heading size={2} fit caps lineHeight={1} textColor="primary">
            Os problemas
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgImage={images.plugins.replace("/", "")} bgDarken={0.75}>
          <Heading size={2} fit caps lineHeight={1} textColor="primary">
            Dependência de plugins
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgImage={images.surprises.replace("/", "")} bgDarken={0.75}>
          <Heading size={2} fit caps lineHeight={1} textColor="primary">
            Comportamentos inesperados
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgImage={images.too_complicated.replace("/", "")} bgDarken={0.75}>
          <Heading size={2} fit caps lineHeight={1} textColor="primary">
            Complicações desnecessárias
          </Heading>
        </Slide>

         {/* A little on Substack */}

        <Slide transition={["slide"]} bgImage={images.substack1.replace("/", "")} bgDarken={0.75}>
          <BlockQuote>
            <Quote>There are some fancy tools for doing build automation on javascript projects that I have never felt the appeal of [...]</Quote>
            <Cite>James "Substack" Halliday</Cite>
          </BlockQuote>
        </Slide>

        <Slide transition={["slide"]} bgImage={images.substack2.replace("/", "")} bgDarken={0.75}>
          <BlockQuote>
            <Quote>[...] because the lesser-known npm run command has been perfectly adequate for everything I've needed [...]</Quote>
            <Cite>James "Substack" Halliday</Cite>
          </BlockQuote>
        </Slide>

        {/* All hail NPM */}

        <Slide transition={["slide"]} bgImage={images.npm.replace("/", "")}>
        </Slide>

        <Slide transition={["zoom", "fade"]} bgColor="primary">

          <Heading size={2} fit lineHeight={1} textColor="white">
            npm?
          </Heading>

        </Slide>

        <Slide transition={["slide"]} bgImage={images.npm_seldo.replace("/", "")} bgDarken={0.75}>
          <Heading size={2} fit caps lineHeight={1} textColor="primary">
            Sim :)
          </Heading>
        </Slide>

         {/* The script object */}
        <Slide transition={["slide"]} bgImage={images.npm_scripts.replace("/", "")} bgDarken={0.75}>
          <BlockQuote>
            <Quote>An object which exposes additional npm commands.</Quote>
            <Cite>Nodejitsu</Cite>
          </BlockQuote>
        </Slide>

         {/* Trippin' time */}
        <Slide transition={["slide"]} bgImage={images.imagination.replace("/", "")} bgDarken={0.75}>
          <Heading size={2} fit caps lineHeight={1} textColor="primary">
            Vamos imaginar...
          </Heading>
        </Slide>

        {/* Copy Examples */}
        <Slide transition={["zoom", "fade"]} bgColor="tertiary">

          <Heading size={2} fit lineHeight={1} textColor="white">
            Copiando...
          </Heading>

        </Slide>

        <Slide transition={["zoom", "fade"]} bgColor="primary">

          <Heading size={2} caps lineHeight={1} textColor="white">
            No Grunt...
          </Heading>

          <CodePane
            lang="javascript"
            source={require("raw!./snippets/copy/grunt.ex")}
            margin="20px auto"/>

        </Slide>

        <Slide transition={["zoom", "fade"]} bgColor="primary">

          <Heading size={2} caps lineHeight={1} textColor="white">
            No Gulp...
          </Heading>

          <CodePane
            lang="javascript"
            source={require("raw!./snippets/copy/gulp.ex")}
            margin="20px auto"/>

        </Slide>

        <Slide transition={["zoom", "fade"]} bgColor="primary">

          <Heading size={2} caps lineHeight={1} textColor="white">
            No NPM...
          </Heading>

          <CodePane
            lang="javascript"
            source={require("raw!./snippets/copy/npm.ex")}
            margin="20px auto"/>

        </Slide>

        {/* Cleaning Examples */}
        <Slide transition={["zoom", "fade"]} bgColor="tertiary">

          <Heading size={2} fit lineHeight={1} textColor="white">
            Limpando
          </Heading>

        </Slide>

        <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">

          <Heading size={2} caps lineHeight={1} textColor="white">
            No Grunt...
          </Heading>

          <CodePane
            lang="javascript"
            source={require("raw!./snippets/clean/grunt.ex")}
            margin="20px auto"/>

        </Slide>

        <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">

          <Heading size={2} caps lineHeight={1} textColor="white">
            No Gulp...
          </Heading>

          <CodePane
            lang="javascript"
            source={require("raw!./snippets/clean/gulp.ex")}
            margin="20px auto"/>

        </Slide>

        <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">

          <Heading size={2} caps lineHeight={1} textColor="white">
            No NPM...
          </Heading>

          <CodePane
            lang="javascript"
            source={require("raw!./snippets/clean/npm.ex")}
            margin="20px auto"/>

        </Slide>

        {/* JSHint Examples */}
        <Slide transition={["zoom", "fade"]} bgColor="tertiary">

          <Heading size={2} fit lineHeight={1} textColor="white">
            Linting
          </Heading>

        </Slide>

        <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">

          <Heading size={2} caps lineHeight={1} textColor="white">
            No Grunt...
          </Heading>

          <CodePane
            lang="javascript"
            source={require("raw!./snippets/jshint/grunt.ex")}
            margin="20px auto"/>

        </Slide>

        <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">

          <Heading size={2} caps lineHeight={1} textColor="white">
            No Gulp...
          </Heading>

          <CodePane
            lang="javascript"
            source={require("raw!./snippets/jshint/gulp.ex")}
            margin="20px auto"/>

        </Slide>

        <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">

          <Heading size={2} caps lineHeight={1} textColor="white">
            No NPM...
          </Heading>

          <CodePane
            lang="javascript"
            source={require("raw!./snippets/jshint/npm.ex")}
            margin="20px auto"/>

        </Slide>

        {/* Browsersync Examples */}
        <Slide transition={["zoom", "fade"]} bgColor="tertiary">

          <Heading size={2} fit lineHeight={1} textColor="white">
            Servindo
          </Heading>

        </Slide>

        <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">

          <Heading size={2} caps lineHeight={1} textColor="white">
            No Grunt...
          </Heading>

          <CodePane
            lang="javascript"
            source={require("raw!./snippets/browser-sync/grunt.ex")}
            margin="20px auto"/>

        </Slide>

        <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">

          <Heading size={2} caps lineHeight={1} textColor="white">
            No Gulp...
          </Heading>

          <CodePane
            lang="javascript"
            source={require("raw!./snippets/browser-sync/gulp.ex")}
            margin="20px auto"/>

        </Slide>

        <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">

          <Heading size={2} caps lineHeight={1} textColor="white">
            No NPM...
          </Heading>

          <CodePane
            lang="javascript"
            source={require("raw!./snippets/browser-sync/npm.ex")}
            margin="20px auto"/>

        </Slide>

        {/* Styles Examples */}
        <Slide transition={["zoom", "fade"]} bgColor="tertiary">

          <Heading size={2} fit lineHeight={1} textColor="white">
            Estilos
          </Heading>

        </Slide>

        <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">

          <Heading size={2} caps lineHeight={1} textColor="white">
            No Grunt...
          </Heading>

          <CodePane
            lang="javascript"
            source={require("raw!./snippets/sass/grunt.ex")}
            margin="20px auto"/>

        </Slide>

        <Slide transition={["zoom", "fade"]} bgColor="primary">

          <Heading size={2} caps lineHeight={1} textColor="white">
            No Gulp...
          </Heading>

          <CodePane
            lang="javascript"
            source={require("raw!./snippets/sass/gulp.ex")}
            margin="20px auto"/>

        </Slide>

        <Slide transition={["zoom", "fade"]} bgColor="primary">

          <Heading size={2} caps lineHeight={1} textColor="white">
            No NPM...
          </Heading>

          <CodePane
            lang="javascript"
            source={require("raw!./snippets/sass/npm.ex")}
            margin="20px auto"/>

        </Slide>

        {/* Jade Examples */}
        <Slide transition={["zoom", "fade"]} bgColor="tertiary">

          <Heading size={2} fit lineHeight={1} textColor="white">
            Templating
          </Heading>

        </Slide>

        <Slide transition={["zoom", "fade"]} bgColor="primary">

          <Heading size={2} caps lineHeight={1} textColor="white">
            No Grunt...
          </Heading>

          <CodePane
            lang="javascript"
            source={require("raw!./snippets/jade/grunt.ex")}
            margin="20px auto"/>

        </Slide>

        <Slide transition={["zoom", "fade"]} bgColor="primary" >

          <Heading size={2} caps lineHeight={1} textColor="white">
            No Gulp...
          </Heading>

          <CodePane
            lang="javascript"
            source={require("raw!./snippets/jade/gulp.ex")}
            margin="20px auto"/>

        </Slide>

        <Slide transition={["zoom", "fade"]} bgColor="primary">

          <Heading size={2} caps lineHeight={1} textColor="white">
            No NPM...
          </Heading>

          <CodePane
            lang="javascript"
            source={require("raw!./snippets/jade/npm.ex")}
            margin="20px auto"/>

        </Slide>

        {/* Typescript Examples */}
        <Slide transition={["zoom", "fade"]} bgColor="tertiary">

          <Heading size={2} fit lineHeight={1} textColor="white">
            Pré-processadores
          </Heading>

        </Slide>

        <Slide transition={["zoom", "fade"]} bgColor="primary">

          <Heading size={2} caps lineHeight={1} textColor="white">
            No Grunt...
          </Heading>

          <CodePane
            lang="javascript"
            source={require("raw!./snippets/ts/grunt.ex")}
            margin="20px auto"/>

        </Slide>

        <Slide transition={["zoom", "fade"]} bgColor="primary">

          <Heading size={2} caps lineHeight={1} textColor="white">
            No Gulp...
          </Heading>

          <CodePane
            lang="javascript"
            source={require("raw!./snippets/ts/gulp.ex")}
            margin="20px auto"/>

        </Slide>

        <Slide transition={["zoom", "fade"]} bgColor="primary">

          <Heading size={2} caps lineHeight={1} textColor="white">
            No NPM...
          </Heading>

          <CodePane
            lang="javascript"
            source={require("raw!./snippets/ts/npm.ex")}
            margin="20px auto"/>

        </Slide>

         {/* Cases */}

        <Slide transition={["slide"]} bgImage={images.confused.replace("/", "")} bgDarken={0.75}>
          <Heading size={2} fit caps lineHeight={1} textColor="primary">
            Alguém usa?
          </Heading>
        </Slide>

        <Slide transition={["zoom", "fade"]} bgColor="white">

          <Image width="100%" src={images.automation_by_substack}/>

        </Slide>

        <Slide transition={["zoom", "fade"]} bgColor="white">

          <Image width="100%" src={images.automation_by_addy}/>

        </Slide>

        <Slide transition={["zoom", "fade"]} bgColor="tertiary">

          <Heading size={2} dcaps lineHeight={1} textColor="white">
            ...
          </Heading>

        </Slide>

         {/* Conclusion */}

        <Slide transition={["slide"]} bgImage={images.confused.replace("/", "")} bgDarken={0.75}>
          <Heading size={2} fit caps lineHeight={1} textColor="primary">
            Tenho que parar de usar meus task runners?
          </Heading>
        </Slide>

        <Slide transition={["zoom", "fade"]} bgColor="tertiary">

          <Heading size={2} fit caps lineHeight={1} textColor="white">
            Não :)
          </Heading>

        </Slide>

         {/* Any doubts? */}
        <Slide transition={["zoom", "fade"]} bgImage={images.thinking.replace("/", "")} bgDarken={0.75}>

          <Heading size={2} fit caps lineHeight={1} textColor="white">
            Perguntas?
          </Heading>

        </Slide>

         {/* Final slide */}
        <Slide transition={["zoom", "fade"]} bgImage={images.finish.replace("/", "")} bgDarken={0.75}>

          <Heading size={2} fit caps lineHeight={1} textColor="white">
            Obrigado :)
          </Heading>

          <Link href="http://matheusbrasil.com/">
            <Text bold caps textColor="tertiary">@mabrasil</Text>
          </Link>

          <Text textSize="1.5em" margin="20px 0px 0px" bold>#nug-ce</Text>

        </Slide>
      </Deck>
    );
  }
}
