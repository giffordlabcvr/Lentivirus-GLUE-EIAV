## Equine Infectious Anemia Virus (EIAV) Extension to Lentivirus-GLUE

<img src="md/horse-droplet.png" align="right" alt="" width="280" />

Welcome to the GitHub repository for **Lentivirus-GLUE-EIAV**: an extension to **[Lentivirus-GLUE](https://github.com/giffordlabcvr/Lentivirus-GLUE)**.

Equine infectious anemia virus (EIAV) infects horses, mules, and donkeys, causing a persistent infection characterized by recurrent episodes of fever, anemia, and weight loss. The virus is primarily transmitted through blood-feeding insects like horseflies and deerflies, which mechanically transfer the virus between animals. EIAV exhibits high genetic variability, enabling it to evade the host immune response and persist for the lifetime of the host. While some infected horses develop severe clinical signs, others remain asymptomatic carriers, posing a risk of transmission to other animals. Diagnosis is commonly achieved through serological testing, such as the Coggins test, which detects antibodies against the virus. Control measures include rigorous testing and quarantine, as no vaccine or cure exists for EIAV, making it a significant concern for equine health and industry biosecurity worldwide.

The EIAV extension to EIAV-GLUE incorporates all published EIAV sequence data linked to associated metadata, including information that is sequence-associated (length, publication date); taxonomic (viral genotype, subtype); and isolate-associated (isolation host species, date and location of sampling, isolation source). 

The EIAV extension of Lentivirus-GLUE provides functionality for genotyping EIAV sequences via **maximum likelihood**. Genotyping can be performed on any sequence of adequate length (typically >300 nucleotides are required for confident assignment). Any genomic region can be genotyped using the approach implemented in EIAV-GLUE.

Classification is based on maximum likelihood clade assignment (MLCA) as implemented in GLUE. Sequences are classified into genotypes and subtypes defined via phylogenetic analysis of full-length reference genome sequences.

For more details on the EIAV extension project please see the Lentivirus-GLUE **[User Guide](https://github.com/giffordlabcvr/Lentivirus-GLUE/wiki/EIAV-Project-Development-Background)**.

* * * * *


Installation
------------

To install **Lentivirus-GLUE-ERV**, follow the instructions provided in the **[User Guide](https://github.com/giffordlabcvr/Lentivirus-GLUE/wiki)**.

You can choose between:

-   **[Docker-based installation](https://github.com/giffordlabcvr/Lentivirus-GLUE/wiki/Docker-Installation)** for ease of deployment.
-   **[Native installation](https://github.com/giffordlabcvr/Lentivirus-GLUE/wiki/Native-Installation)** for traditional setup.

Lentivirus-GLUE-ERV can be installed as a prebuilt database for quick setup or constructed from scratch via (a project build process) for more customization.

* * * * *

## Data Sources

**Lentivirus-GLUE-EIAV** is constructed using sequence data obtained from [NCBI Nucleotide](https://www.ncbi.nlm.nih.gov/nuccore).

* * * * *


## Contributing

We welcome contributions from the community! If you're interested in contributing to Lentivirus-GLUE-EIAV, please review our [Contribution Guidelines](./md/CONTRIBUTING.md).

[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](./md/code_of_conduct.md)

* * * * *


## License

The project is licensed under the [GNU Affero General Public License v. 3.0](https://www.gnu.org/licenses/agpl-3.0.en.html)

* * * * *


## Contact

For questions, issues, or feedback, please open an issue on the [GitHub repository](https://github.com/giffordlabcvr/Lentivirus-GLUE-EIAV/issues).

* * * * *
