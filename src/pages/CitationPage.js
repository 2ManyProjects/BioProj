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
export default class Home extends PureComponent {
  render() {
    return (
      <Container style={{}} className="dr-example-container">
        <div>
          <div style={{ alignSelf: "center" }}>
            <h1> Citations </h1>
          </div>

          <ul>
            Banta, S., Wheeldon, I. R., & Blenner, M. (2010). Protein
            Engineering in the Development of Functional Hydrogels. Annual
            Review of Biomedical Engineering, 12(1), 167–186.
            doi:10.1146/annurev-bioeng-070909-105334{" "}
          </ul>
          <ul>
            Cai, L., & Heilshorn, S. C. (2014). Designing ECM-mimetic materials
            using protein engineering. Acta Biomaterialia, 10(4), 1751–1760.
            doi:10.1016/j.actbio.2013.12.028
          </ul>
          <ul>
            Carter, P. J. (2011). Introduction to current and future protein
            therapeutics: A protein engineering perspective. Experimental Cell
            Research, 317(9), 1261–1269. doi:10.1016/j.yexcr.2011.02.013{" "}
          </ul>
          <ul>
            Clark, M. A., Choi, J., & Douglas, M. (2018). Biology 2e. BCcampus,
            https://opentextbc.ca/biology2eopenstax/chapter/proteins/
          </ul>
          <ul>
            Dhanjal, J. K., Malik, V., Radhakrishnan, N., Sigar, M., Kumari, A.,
            & Sundar, D. (2018). Computational Protein Engineering Approaches
            for Effective Design of New Molecules, Encyclopedia of
            Bioinformatics and Computational Biology, vol 3.
            https://doi.org/10.1016/B978-0-12-809633-8.20150-7
          </ul>
          <ul>
            Etanercept. (n. d.). In Wikipedia.
            https://en.wikipedia.org/wiki/Etanercept#Mechanism_of_action
          </ul>
          <ul>
            Fusion protein. (n. d.). In Wikipedia.
            https://en.wikipedia.org/wiki/Fusion_protein
          </ul>
          <ul>
            Heilmann, N., Wolf, M., Kozlowska, M,m Sedghamiz, E., Setzler, J.,
            Brieg, M., & Wenzel, W. (2020). Sampling of the conformational
            landscape of small proteins with Monte Carlo methods. Nature,
            https://www.nature.com/articles/s41598-020-75239-7
          </ul>
          <ul>
            Kortemme, T., & Baker, D. (2004). Computational design of
            protein–protein interactions. Current Opinion in Chemical Biology,
            vol 8. https://doi.org/10.1016/j.cbpa.2003.12.008
          </ul>
          <ul>
            Leader, B., Baca, Q. J., & Golan, D. E. (2008). Protein
            therapeutics: a summary and pharmacological classification. Nature
            Reviews Drug Discovery, 7(1), 21–39. doi:10.1038/nrd2399.
          </ul>
          <ul>
            Leopold, P. E., Montal, M., & Onuchic, J. N. (1992). Protein folding
            funnels: a kinetic approach to the sequence-structure relationship.
            PNAS, 89 (18), 8721-8725. https://doi.org/10.1073/pnas.89.18.8721
          </ul>
          <ul>
            Liu, C. (2019). Unlocking the full potential of therapeutic fusion
            proteins: R&D insights to help you get ahead. American Chemical
            Society.
            https://www.cas.org/resources/blog/unlocking-full-potential-therapeutic-fusion-proteins-rd-insights-help-you-get-ahead
          </ul>
          <ul>
            Li, C., Zhang, R,. Wang, J., Wilson, L. M., & Yan, Y. (2020).
            Protein Engineering for Improving and Diversifying Natural Product
            Biosynthesis. Trends in Biotechnology, vol 38.
            https://doi.org/10.1016/j.tibtech.2019.12.00
          </ul>
          <ul>
            Maskarinec, S. A., & Tirrell, D. A. (2005). Protein engineering
            approaches to biomaterials design. Current Opinion in Biotechnology,
            16(4), 422–426. doi:10.1016/j.copbio.2005.06.009
          </ul>
          <ul>
            Park, J. B., & Lakes, R. S. (2010). Biomaterials: an introduction.
            Springer.
          </ul>
          <ul>
            Plintnich, L. M., & Herzyk, D. J. (2013). Nonclinical Development of
            Novel Biologics, Biosimilars, Vaccines and Specialty Biologics.
            Elsevier, https://doi.org/10.1016/C2011-0-07530-0
          </ul>
          <ul>
            Protein. (n. d). In Wikipedia. https://en.wikipedia.org/wiki/Protein
          </ul>
          <ul>
            Senior, A., Jumper, J., Hassabis, D., & Kohli, P. (2020). AlphaFold:
            Using AI for scientific discovery. DeepMind.
            https://deepmind.com/blog/article/AlphaFold-Using-AI-for-scientific-discovery
          </ul>
          <ul>
            Tobin, P. H., Richards, D. H., Callender, R. A., & Wilson, C. J.
            (2014). Protein engineering: a new frontier for biological
            therapeutics. Current drug metabolism, 15(7), 743–756.
            https://doi.org/10.2174/1389200216666141208151524
          </ul>
          <ul>
            Wolynes, P. G., & Bryngelson, J. D. (1987). Spin glasses and the
            statistical mechanics of protein folding. PNAS, 84 (21), 7524-7528.
            https://doi.org/10.1073/pnas.84.21.7524
          </ul>
          <ul>
            Wolynes, P. G., & Eaton, W. A. (1999). The physics of protein
            folding. Physics World, 12 (9), 39.
            https://doi.org/10.1088/2058-7058/12/9/24
          </ul>
        </div>
      </Container>
    );
  }
}
