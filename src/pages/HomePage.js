import React, { PureComponent } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import {
  Button,
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "shards-react";
import { Timeline, TimelineEvent } from "react-event-timeline";
import Shape from "../components/PointedShape";
import ImageText from "../components/ImageText";
import BottomHeader from "../components/BottomHeader";
import { Image } from "react-bootstrap";
import cardboardPic from "../res/landing-page/cardboard-services.jpg";
import mushroomPic from "../res/landing-page/Mushroom.jpg";
import logYSprouts from "../res/landing-page/banner-imagethrd.jpg";
import bgSilhouette from "../res/landing-page/bg.png";
export default class Home extends PureComponent {
  render() {
    return (
      <Container
        style={{
          position: "absolute",
          top: 0,
          left: -20,
          maxWidth: this.props.isMobile ? "100%" : "200%",
          width: this.props.isMobile ? "100%" : "100%",
          justifyContent: "center",
          alignSelf: "center",
        }}
        className="dr-example-container"
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            width: "100%",
          }}
        >
          <Image
            style={{
              width: "100%",
            }}
            fluid
            src={logYSprouts}
          ></Image>
        </div>
        <div
          style={{
            width: "100%",
            position: "absolute",
            top: "20vw",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1
            style={{
              fontWeight: "1000",
              fontSize: this.props.isMobile ? "5vw" : "3vw",
              paddingBottom: this.props.isMobile ? "0em" : "1em",
              color: "rgb(150,213,89)",
            }}
          >
            BIO Term Project
          </h1>
          <h5
            style={{
              color: "rgb(255,255,255)",
              fontWeight: "10",
              fontSize: this.props.isMobile ? "3vw" : "1.5vw",
              zIndex: 1,
            }}
          >
            Some Tag Line here?
          </h5>
        </div>
        <div>
          <span
            style={{
              color: "#2c4058",
              fontWeight: "800",
              fontSize: this.props.isMobile ? "4vw" : "2vw",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingTop: this.props.isMobile ? "50%" : "45%",
            }}
          >
            ENBREL
          </span>
        </div>
        {/* <StructureView /> */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            paddingTop: "20px",
          }}
        >
          <div
            style={{
              width: "100px",
              height: "2px",
              background: "#2c3f58",
              marginBottom: "60px",
            }}
          ></div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            position: "absolute",
            width: "90%",
          }}
        >
          <div
            style={{
              display: "block",
              flexDirection: "row",
              position: "relative",
              alignSelf: "flex-start",
              maxWidth: this.props.isMobile ? "100%" : "220%",
              width: this.props.isMobile ? "100%" : "600px",
              height: "475px",
              background: "rgb(150, 213, 89)",
              // marginBottom: props.isMobile ? "55vw" : "60px",
              marginBottom: this.props.isMobile ? "20em" : "8em",
              paddingLeft: this.props.isMobile ? "0%" : "100px",
              paddingTop: "20px",
            }}
          >
            <Shape>
              <div
                style={{
                  position: "relative",
                  top: "-130px",
                  left: "0px",
                  width: this.props.isMobile ? "100%" : "150%",
                }}
              >
                <ImageText
                  imageSrc={cardboardPic}
                  title="Introduction to Protein Engineering"
                  flip={false}
                  link="/"
                  isMobile={this.props.isMobile}
                  btnText=" "
                  text="Proteins are macromolecules that are made up of amino acids. (“Protein”, 2021) There are 20 different common types of amino acids, 9 of which are considered the “9 essential amino acids”. These 9 amino acids cannot be produced by the human body, and must be obtained from our diet. (Clark et al.,  2018)

                  Within the human body, there exist a variety of proteins, each with their own unique role. These functions can be broken down into 7 broad categories: Digestion (Breaking down of food), Transportation (transport of substances through blood), Structural (eg. nails), Hormonal (Regulate body system activity), Defense, Contractile (muscle contraction), Storage (nutrient store for embryo development)
                  "
                  embedId="mY2_DlGfq08"
                ></ImageText>
              </div>
            </Shape>
          </div>
          <div
            style={{
              display: "block",
              flexDirection: "row",
              position: "relative",
              alignSelf: "flex-start",
              width: "600px",
              height: "475px",
              background: "rgb(150, 213, 89)",
              // marginBottom: "130px",
              paddingLeft: "10px",
              paddingTop: "20px",
              paddingBottom: "52vw",
            }}
          >
            <Shape>
              <div
                style={{
                  position: "absolute",
                  top: "100px",
                  right: "0%",
                  width: "100%",
                }}
              >
                <ImageText
                  imageSrc={mushroomPic}
                  flip={true}
                  title="Physics of Protein Folding"
                  link="/"
                  isMobile={this.props.isMobile}
                  btnText=""
                  text="Contrary to what may seem intuitive, proteins do not follow a well organized series of predetermined steps to reach their native structure, they fold somewhat randomly, correcting errors as they approach lower and lower energy states. The process of protein folding is analogous to the statistical physics of “spin glasses” (Wolynes & Bryngelson, 1987). In a spin glass, neighbouring atoms of disordered magnetic alloys can spin either in the same or opposite directions, and as a spin glass cools the spins arrange themselves in a low energy conformation that satisfies as many atoms as possible. This behaviour is mirrored in protein folding as the protein will fold through many conformations to attempt to reach a stable low energy state. A chain of amino acids that is unable to easily find the unique shape that produces a functioning protein is a “frustrated” protein (Wolynes & Eaton, 1999). Frustration is a protein's ability to reach a low energy state while satisfying as many amino acid neighbours as possible. Wolynes & Eaton describe the “principle of minimal frustration” as the guiding principle that produces the organic proteins we find inside living things. In random assortments of amino acids, there are typically many ways to get an approximately equal low energy state. The “energy landscape” of these frustrated proteins would have many local energy minima, with no state dominating over the rest (Wolynes & Eaton, 1999). What we find in biologically occurring proteins is that in their energy landscape, they have a so-called “energy funnel” (Leopold, Montal, & Onuchic, 1991). As these proteins wriggle about searching for a low energy conformation, it’s conformations will lead it down towards its native structure -the folded protein you would find in your body-. This native state sits at the bottom of a global minimum energy conformation. There are clear evolutionary imperatives responsible for selecting for proteins that tend to fold the same way every time, as opposed to the random assortment of amino acids with their near random stable conformations; when you’re building a living thing of course, consistency is key. When we engineer proteins, therefore, we must search for proteins that not only can conform to a shape that is biologically useful, we must search for proteins that have a predictable folding funnel that can consistently produce useful proteins."
                  embedId="-Cu3pfB9O-Y"
                ></ImageText>
              </div>
            </Shape>
          </div>

          <div
            style={{
              display: "block",
              flexDirection: "row",
              position: "relative",
              alignSelf: "flex-start",
              maxWidth: this.props.isMobile ? "100%" : "220%",
              width: this.props.isMobile ? "100%" : "600px",
              height: "475px",
              background: "rgb(150, 213, 89)",
              // marginBottom: props.isMobile ? "55vw" : "60px",
              marginBottom: this.props.isMobile ? "20em" : "8em",
              paddingLeft: this.props.isMobile ? "0%" : "100px",
              paddingTop: "20px",
            }}
          >
            <Shape>
              <div
                style={{
                  position: "relative",
                  top: "-130px",
                  left: "0px",
                  width: this.props.isMobile ? "100%" : "150%",
                }}
              >
                <ImageText
                  imageSrc={mushroomPic}
                  title="History of Protein Engineering"
                  flip={false}
                  link="/"
                  isMobile={this.props.isMobile}
                  btnText=""
                  text=""
                  embedId="aXDFT3HLVaQ"
                ></ImageText>
              </div>
            </Shape>
          </div>

          <div
            style={{
              background: "rgb(216,232,230)",
              paddingLeft: "2em",
              paddingBottom: "2em",
              paddingTop: "1em",
            }}
          >
            <Timeline>
              <TimelineEvent
                title="MRC Unit for the Study of the Molecular Structure of Biological Systems opens"
                createdAt="1948"
                icon={<i className="material-icons md-18"></i>}
              >
                <ul>Research Unit part of the UK’s Medical Research Council</ul>
                <ul>
                  Unit dedicated to the Study of the Molecular Structure of
                  Biological Systems
                </ul>
                <ul>Later renamed MRC Unit for Molecular Biology</ul>
                <ul>Max Perutz, John Kendrew were founding members</ul>
                <ul>
                  Francis Clark joined in 1949 (Discovered DNA Helix structure)
                </ul>
                <ul>
                  James Watson joined in 1951 (Discovered DNA Helix structure)
                </ul>
              </TimelineEvent>
              <TimelineEvent
                title="Frederick Sanger - 2 Time Nobel Prize winner in chemistry"
                createdAt="1951"
                icon={<i className="material-icons md-18"></i>}
              >
                <ul>
                  Determined the complete Amino acid sequence of a protein
                  (bovine insulin)
                </ul>
                <ul>
                  In doing so proved that proteins are not “amorphous” but have
                  a defined chemical composition
                </ul>
                <ul>
                  I.e. Showed that proteins were linear polymers, not branched
                  chains, colloids, or cyclops.
                </ul>
                <ul>
                  https://web.archive.org/web/20140313164607/http://jiscmediahub.ac.uk/record/display/012-00002584
                  (Section 20, use remove overlay extension)
                </ul>
                <ul>
                  His paper:
                  https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1275055/{" "}
                </ul>
              </TimelineEvent>
              <TimelineEvent
                title="Max Ferdinand Perutz - Creates a way to use X-ray crystallography for proteins"
                createdAt="1953"
                icon={<i className="material-icons md-18"></i>}
              >
                <ul>
                  https://en.wikipedia.org/wiki/Max_Perutz#Establishment_of_the_Molecular_Biology_Unit{" "}
                </ul>
                <ul>
                  https://www.sciencehistory.org/distillations/magazine/information-overload{" "}
                </ul>
              </TimelineEvent>
              <TimelineEvent
                title="Sir John Cowdery Kendrew"
                createdAt="1958 "
                icon={<i className="material-icons md-18"></i>}
              >
                <ul>
                  Used X-ray crystallography to determine the structure of
                  proteins for the first time myoglobin
                </ul>
                <ul>Shared Nobel Prize with Max Perutz</ul>
                <ul>
                  https://en.wikipedia.org/wiki/John_Kendrew#Crystal_structure_of_myoglobin{" "}
                </ul>
                <ul>https://www.nature.com/articles/185422a0 </ul>
              </TimelineEvent>
              <TimelineEvent
                title="Max Ferdinand Perutz"
                createdAt="1959"
                icon={<i className="material-icons md-18"></i>}
              >
                <ul>
                  Used X-ray crystallography to determine the structure of
                  hemoglobin
                </ul>
                <ul>Shared Nobel Prize John Kendrew</ul>
                <ul>
                  https://en.wikipedia.org/wiki/Hemoglobin#Research_history{" "}
                </ul>
                <ul>https://www.nature.com/articles/185416a0 </ul>
              </TimelineEvent>
              <TimelineEvent
                title="Jane Richardson"
                createdAt="1981 "
                icon={<i className="material-icons md-18"></i>}
              >
                <ul>
                  Developed Ribbon Diagram method for viewing the 3D structure
                  of proteins
                </ul>
                <ul>
                  Throughout 1980s one of the pioneers of “de novo design of
                  proteins”{" "}
                  <ul>
                    A reverse engineering approach to make and test predicted
                    models about protein folding
                  </ul>
                </ul>
                <ul>https://en.wikipedia.org/wiki/Jane_S._Richardson </ul>
                <ul>
                  https://www.thoughtco.com/famous-women-in-chemistry-609453{" "}
                </ul>
              </TimelineEvent>
              <TimelineEvent
                title="Kary Mullis - Invented PCR"
                createdAt="1983 "
                icon={<i className="material-icons md-18"></i>}
              >
                <ul>
                  Earlier similar methods existed but Kary Mullis is credited
                </ul>
                <ul>He was hired by Cetus Corp</ul>
                <ul>https://en.wikipedia.org/wiki/Kary_Mullis</ul>
                <ul>
                  https://en.wikipedia.org/wiki/Polymerase_chain_reaction#History{" "}
                </ul>
                <ul>https://archive.org/details/dancingnakedinmi00mull </ul>
              </TimelineEvent>
              <TimelineEvent
                title="PRESENT - Directed Evolution"
                createdAt="1985"
                icon={<i className="material-icons md-18"></i>}
              >
                <ul>
                  Method that mimics natural selection to steer proteins towards
                  a certain goal
                </ul>
                <ul>
                  The method was used for RNA in the 1960s but they managed to
                  make it work on proteins by the 1980s
                </ul>
                <ul>
                  Thanks to development of phage display technique by George
                  Smith
                </ul>
                <ul>https://en.wikipedia.org/wiki/Directed_evolution </ul>
                <ul>https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2982887/</ul>
              </TimelineEvent>
              <TimelineEvent
                title="Rational Design - Protein Design"
                createdAt="1985"
                icon={<i className="material-icons md-18"></i>}
              >
                <ul>
                  Rational Design is an umbrella term for any strategy to create
                  new molecules with a desired function using predictions and
                  models.
                  <ul>
                    Molecules are generally either made from scratch (De novo)
                    or by modifying an existing one.
                  </ul>
                  <ul>https://en.wikipedia.org/wiki/Rational_design </ul>
                </ul>
                <ul>
                  Protein Design tends to focus on the folding aspect
                  <ul>
                    The first designed proteins appeared in the 1970s and 80s
                    (attributed to Bernd Gutte), these were generally
                    modifications of known proteins
                  </ul>
                  <ul>
                    Only in the 1990s, when computers became powerful enough
                    were we able to finally use the De novo approach
                  </ul>
                  <ul>
                    https://en.wikipedia.org/wiki/Protein_design#Overview_and_history{" "}
                  </ul>
                  <ul>
                    https://www.sciencedirect.com/science/article/abs/pii/0968000489900704?via%3Dihub{" "}
                  </ul>
                  <ul>
                    https://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.72.7304{" "}
                  </ul>
                </ul>
              </TimelineEvent>
              <TimelineEvent
                title="Stephen Mayo "
                createdAt="1997 "
                icon={<i className="material-icons md-18"></i>}
              >
                <ul>Made the first protein ever designed completely de novo</ul>
                <ul>
                  https://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.72.7304{" "}
                </ul>
                <ul>
                  https://en.wikipedia.org/wiki/Protein_design#Overview_and_history{" "}
                </ul>
              </TimelineEvent>
              <TimelineEvent
                title="David Baker’s Lab"
                createdAt="2003"
                icon={<i className="material-icons md-18"></i>}
              >
                <ul>
                  Designed a protein that folded in a way never before seen in
                  nature
                </ul>
                <ul>https://science.sciencemag.org/content/302/5649/1364</ul>
                <ul>
                  https://en.wikipedia.org/wiki/Protein_design#Overview_and_history{" "}
                </ul>
              </TimelineEvent>
              <TimelineEvent
                title="Foldit"
                createdAt="2008"
                icon={<i className="material-icons md-18"></i>}
              >
                <ul>
                  Founded by David Baker, Foldit is a game which allows public
                  players to fold proteins.
                </ul>
                <ul>
                  Since then Foldit players have been cited in numerous
                  scientific papers for designing new proteins or solving design
                  problems. Players have even managed to solve design problems
                  that had been mysteries for well over a decade.
                </ul>
                <ul>https://en.wikipedia.org/wiki/Foldit#Accomplishments </ul>
              </TimelineEvent>
            </Timeline>
          </div>

          <div
            style={{
              display: "block",
              flexDirection: "row",
              position: "relative",
              alignSelf: "flex-start",
              maxWidth: this.props.isMobile ? "100%" : "220%",
              width: this.props.isMobile ? "100%" : "600px",
              height: "475px",
              background: "rgb(150, 213, 89)",
              // marginBottom: props.isMobile ? "55vw" : "60px",
              marginBottom: this.props.isMobile ? "20em" : "8em",
              paddingLeft: this.props.isMobile ? "0%" : "100px",
              paddingTop: "20px",
            }}
          >
            <Shape>
              <div
                style={{
                  position: "relative",
                  top: "-130px",
                  left: "0px",
                  width: this.props.isMobile ? "100%" : "150%",
                }}
              >
                <ImageText
                  imageSrc={cardboardPic}
                  title="Why is Protein Engineering important"
                  flip={false}
                  link="/"
                  isMobile={this.props.isMobile}
                  btnText=" "
                  text="Protein engineering is important for a simple reason, because proteins are important. In the growing field of biosynthesis of natural products, protein engineering is “paramount” for modifying enzymes or biosensors. (Li et al. 2020)

                  The increased involvement of computation in protein engineering has further raised the potential of protein engineering as a whole. An example of the application of protein engineering can be found in the pharmaceutical use of insulin. When it was discovered that native insulins had a “slower onset of therapeutic effect”, the amino acid sequence of the insulin protein was altered to obtain a faster acting insulin. (Reynolds et al. 2013) 
                  "
                  embedId="10Gmbb-p314"
                ></ImageText>
              </div>
            </Shape>
          </div>
          <div
            style={{
              display: "block",
              flexDirection: "row",
              position: "relative",
              alignSelf: "flex-start",
              width: "600px",
              height: "475px",
              background: "rgb(150, 213, 89)",
              // marginBottom: "130px",
              paddingLeft: "10px",
              paddingTop: "20px",
              paddingBottom: "40vw",
            }}
          >
            <Shape>
              <div
                style={{
                  position: "absolute",
                  top: "100px",
                  right: "0%",
                  width: "100%",
                }}
              >
                <ImageText
                  imageSrc={mushroomPic}
                  flip={true}
                  title="How are Proteins Engineered?"
                  link="/"
                  isMobile={this.props.isMobile}
                  btnText=""
                  text="Protein is engineered by modifying protein sequence by adding, deleting, and substituting nucleotides in the gene in order to change the pH of the protein or to make protein more stable to the temperature, for example (Dhanjal et al., 2019). First, protein is modulated by a method called computational design, which seeks to locate and identify amino acid sequences that require low energy to modify for a specific protein structure. In order to find the lowest energy structure of the amino acid sequence, scientists use Rosetta methodology, which simulates possible protein folding and samples the energy of the simulated protein structure. When a protein with new shapes and functions is designed on a computer, scientists encode the protein in a synthetic gene. The encoding has to be done in a synthetic gene since none of existing organisms can encode the designed new protein. After the synthetic genes are obtained, scientists insert it into bacteria as they can make programmed proteins (Kortemme & Baker, 2004). 
                  "
                  embedId="E6B6Mqr5YRE"
                ></ImageText>
              </div>
            </Shape>
          </div>

          <div
            style={{
              display: "block",
              flexDirection: "row",
              position: "relative",
              alignSelf: "flex-start",
              width: "600px",
              height: "475px",
              background: "rgb(150, 213, 89)",
              // marginBottom: "130px",
              paddingLeft: "10px",
              paddingTop: "20px",
              paddingBottom: "52vw",
            }}
          >
            <Shape>
              <div
                style={{
                  position: "absolute",
                  top: "100px",
                  right: "0%",
                  width: "100%",
                }}
              >
                <ImageText
                  imageSrc={mushroomPic}
                  flip={true}
                  title="Enbrel"
                  link="/"
                  isMobile={this.props.isMobile}
                  btnText=""
                  text="Enbrel, with the proper name of Etanercept, is a pharmaceutical product that is synthesised from biological sources. Its main use is the treatment of autoimmune diseases (diseases where the patient is mistakenly attacked by their own immune system) by interfering with TNF, the protein that signals the detection of an infection by macrophages. (“Etanercept”, 2021)

                  Etanercept was first synthesised at the University of Texas Southwestsern Medical Center at Dallas by Bruce A. Beutler. Etanercept is made from combining two natural soluble TNF receptors linked to a portion of Immunoglobulin G. (“Etanercept”, 2021) Etanercept is considered a recombinant fusion protein, meaning that it is created by combining multiple genes that were originally made for separate proteins. (“Fusion Protein”, 2021)
                  
                  One of the World Health Organization’s essential medicines, Etanercept prevents diseases such as psoriatic arthritis, rheumatoid arthritis, and many other autoimmune diseases by interfering with the TNF protein. In the human body, TNF is produced by lymphocytes and macrophages, and its purpose is to regulate the immune response by attracting white blood cells to the site at which the inflammation occurs. Typically, the body controls the autoimmune response with soluble TNF receptors in the body, these will bind to TNF, then dissolve over time. Seeking to inhibit the effects of TNF, Etanercept will act as a decoy receptor, binding to TNF; then, being a biosynthesised product, Etanercept will take much longer to dissolve compared to its natural counterpart, reducing the autoimmune response. (“Etanercept”, 2021)
                  "
                  embedId="hJfiwx8IIyI"
                ></ImageText>
              </div>
            </Shape>
          </div>
          <div
            style={{
              display: "block",
              flexDirection: "row",
              position: "relative",
              alignSelf: "flex-start",
              width: "600px",
              height: "475px",
              background: "rgb(150, 213, 89)",
              // marginBottom: "130px",
              paddingLeft: "10px",
              paddingTop: "20px",
              paddingBottom: "52vw",
            }}
          >
            <Shape>
              <div
                style={{
                  position: "absolute",
                  top: "100px",
                  right: "0%",
                  width: "100%",
                }}
              >
                <ImageText
                  imageSrc={mushroomPic}
                  flip={true}
                  title="Present and Future Applications of Protein Engineering "
                  link="/"
                  isMobile={this.props.isMobile}
                  btnText=""
                  text="One application of protein engineering is in the field of protein therapeutics. Protein therapeutics is a medical treatment consisting of the use of proteins as a means to mediate illnesses, and has been explored since the 1980s (Leader & Golan, 2008). As proteins are able to perform many tasks in the body, and the activity of each type of protein is very distinct, proteins offer tremendous potential in medical applications . In 2008, there were proteins and peptides approved by the US Food and Drug Administration, most of which deal with antibody-based drugs. Future development of protein therapeutics via protein engineering is currently focused on improved safety, and effectiveness (Leader & Golan, 2008, Carter, 2011).
 
                 A possible future application of protein engineering already being explored can be found in biomaterials design. Biomaterials are materials used to create matter which replaces certain body parts, effectively (Park & Lakes, 2010). As the human body is complex, it is difficult to find substances able to create safe, long lasting, and strong biomaterials for medical procedures such as tissue engineering and reconstructive surgery. Protein engineering may be a solution for such problems. The advantage of proteins in this domain is due to the fact that biomaterials have many functional requirements, both biological and mechanical, and proteins may be engineered to be able to accomplish many of them, as each macromolecular property can be individually contrived. Moreover, proteins are able to regulate the behavior of cells, making it a prime candidate (Maskarinec & Tirrell, 2005).
                   
                  Other current and possible future applications of protein engineering include the creation of new hydrogels, which can serve biomedical purposes, and in regenerative medicine (Cai & Heilshorn, 2014, Banta, Wheekdon & Blenner, 2010). Thus, protein engineering has a wide range of applications, mostly explored in the realm of biomedical operations by the scientific community. However, with the advent of protein engineering in biomaterials, protein engineering may soon be used for material applications outside the scope of medicine.
                  "
                  embedId="HuvxTN47iCQ"
                ></ImageText>
              </div>
            </Shape>
          </div>
          <Image
            style={{
              maxWidth: this.props.isMobile ? "112%" : "220%",
              width: "111%",
            }}
            fluid
            src={bgSilhouette}
          ></Image>
          <BottomHeader isMobile={this.props.isMobile} homePage={"HOMEPAGE"} />
        </div>
      </Container>
    );
  }
}
