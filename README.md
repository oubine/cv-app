# Conception ergonomique, Design et Développement Web d'un CV interactif sur internet 


Bienvenue sur le repository de mon CV en ligne. Celui-ci a été codé par mes soins dans un le cadre d'un projet de fin d'étude à l'utc au sein de la branche informatique. 

Voici le lien du site: https://oubine-perrincv.netlify.app/

Vous trouverez ci-dessous le rapport détaillant l'élaboration de ce projet. Ce rapport est divisé en 4 parties. Tout d'abord, nous allons rappeler dans quel cadre ce projet d'études a commencé et pourquoi celui-ci a vu le jour. Ensuite, je vous présenterai comment j'ai procédé au design l'interface et les outils utilisés.  Enfin nous verrons comment s'est déroulée l'étape de développement, avant de conclure sur les perspectives d'améliorations de l'application.

- [1. Introduction](#introduction)
- [2. Design de l'interface](#design)
	- [a. Outils utilisés](#outils_utilisés)
	- [b. Organisation des informations et choix de la charte graphique](#charte_graphique)
	- [c. Aperçus des deux versions](#deux_versions)
- [3. Développement du site web]("#developpement")
	- [a. Initialisation avec create-react-app]("#react_app")
	- [b. Organisation du src et des composants]("#organisation")
	- [c. Outils et librairies utilisées]("#librairies")
	- [d. Animations]("#animations")
- [4. Mise en ligne sur netlify]("#mise_en_ligne")
- [5. Conclusion]("#conclusion")


## 1. Introduction<a id="introduction"></a>

Ce projet de site web intitulé: *"Conception ergonomique, Design et Développement Web d'un CV interactif sur internet"* entre dans le cadre d'une TZ. A l'UTC, une TZ est l'appellation pour un projet de fin d'étude: les étudiants en fin de cursus a qui il manque des crédits pour valider leur diplôme peuvent réaliser un projet en autonomie pour rattraper leurs derniers crédits manquants sans avoir à faire un semestre supplémentaire. 

C'est la situation dans laquelle je me suis retrouvée en février. J'ai alors décidé de réaliser un projet orienté web car je souhaite m'orienter vers le design d'interface utilisateur pour mon parcours professionnel. Le but de mon projet était de créer un site web faisant d'office de CV utilisable par la suite dans ma vie professionnelle.

J'ai assumé toutes les étapes de création de ce site web. Ce processus se déroule en 3 étapes: 

-  le design d'interface;
-  le développement;
-  et la mise en ligne. 

La premiere étape consiste à conceptualiser l'interface utilisateur, la seconde consiste à coder cette interface et enfin la mise en ligne revient à rendre le site disponible à tous sur internet. Les outils utilisés pour chaque étapes sont détaillés dans les parties dédiées dans la suite du rapport. Néanmoins, ces étapes ne sont pas imperméables les unes aux autres. 

En effet, dans la mesure où j'ai été la seule à travailler sur ce projet, je n'ai pas suivi ce processus linéairement en suivant les étapes les unes après les autres. Par exemple, la conception de certains éléments de l'interface a été faite en même temps que le développement de l'application. Cela a été possible dans la mesure où j'ai été seule à travailler sur le projet. Dans un milieu professionnel, différentes personnes sont en charge des différentes étapes du processus, donc les tâches sont plus divisées. Cependant, pour un soucis de clarté, les différentes étapes du processus sont expliquées linéairement dans la suite du rapport.

## 2. Design de l'interface<a id="design"></a>

Donc, dans un premier temps, il a fallut procéder au design de l'interface et répondre aux questions suivantes : **quelle est la fonction de ce site? Quelles sont les informations nécessaires dans un CV? Quelles sont les informations les plus importantes à mettre en avant et comment agencer toutes les informations entre elles?  Quelles sont les fonctionnalités nécessaires pour rendre la lecture de ce CV dynamique et interrative ? Quelles couleurs utiliser?** Après avoir réfléchi à toutes ces question, il faut faire une maquette du site, c'est à dire créer des visuels qui montrent à quoi le site devrait ressembler à la fin du projet. Ces aperçus ne sont pas fonctionnels mais à but indicatifs pour donner une direction au travail de développement. 

### a. Outils utilisés<a id="outils_utilisés"></a>

Pour cette étape je me suis tout d'abord basée sur un CV (téléchargeable sur mon site) que j'avais réalisé pour ma recherche de TN10. Ainsi, j'ai rapidement su les informations à faire figurer sur le site. 
Pour réaliser ces maquettes, j'ai utilisé figma, un logiciel est un éditeur de graphiques vectoriels et un outil de prototypage, dédié à l'élaboration des maquettes d'interfaces graphiques de siteweb. 

### b. Organisation des informations et choix de la charte graphique<a id="charte_graphique"></a>

Un site est divisé en plusieurs sections ou pages pour diviser et classer les informations en fonction de leur type. Pour définir les différentes section de mon CV en ligne, j'ai repris les différents paragraphes de mon CV en ligne et je les ai réadapté. Ainsi, mon CV en ligne comporte 4 sections distinctes qui sont les suivantes:

- Formations; 
- Compétences; 
- Projets;
- Contacts/autres informations (ex loisirs). 

Cependant, le but de ce projet n'est pas de faire une retranscription de mon CV "papier" sur un écran. En effet, un site web offre des possibilités d'interactivité et de design bien plus large qu'un simple design static. Ainsi, j'ai pu choisir de regrouper plusieurs types d'informations sous une même section. Par exemple, la section "loisirs" qui apparaît traditionnellement sur les CV et qui me semble peu importantes, je l'ai greffée à la section "contacts" dans laquelle je profite pour parler un peu plus de moi. 

De plus, j'ai ajouté une page d'acceuil et un menu. Ce sont des élément qu'un utilisateur attend de voir lorsque il navigue sur internet et ils sont donc importants pour que ce dernier retrouve des repères pour naviguer naturellement sur le site. Ensuite, j'ai également choisi d'ajouter quelques interactions et animations pour rendre le site plus dynamique et attractif. 

Enfin, il a fallu que je choisisse une charte graphique. La charte graphique d'un site, c'est l'identité visuel de ce dernier, c'est ce qui fait qu'un site est reconnaissable. Elle se compose des polices, des couleurs et de certaines normes visuelles. Je voulais un site moderne et épuré. C'est pourquoi j'ai mis peu d'éléments "décoratifs" dans ma charte graphique. En effet, les seuls ornements sont des encadrements fins autour des photos. J'ai préféré misé sur:
- le choix des couleurs: un vert sauge qui m'a inspiré car je le vois partout en ce moment sur mes réseaux sociaux, un vert anis plus clair pour les informations à mettre en avant et un blanc légèrement bleuté pour les textes;
- le choix des polices: Refita pour les gros titres car c'est une police avec beaucoup de relief, et Luciano pour le reste car cette police existe en de nombreuse versions et répond bien à la première sans être banale pour autant
- les interractions: aujourd'hui les sites sont très interactif pour être plus attractifs.  

Si vous voulez observer comment j'ai créé les maquettes, voici le lien vers le figma: https://www.figma.com/file/UazVrdDff4nfKrQ03PrbiD/TZZzzzz?node-id=0%3A1

### c. Aperçus des deux versions<a id="deux_version"></a>

J'ai fait 2 maquettes. En effet, à mi-projet, j'ai décidé de reprendre le design de l'interface car mes premiers choix me posaient des problèmes lors du développement. Notamment, au niveau du choix des interractions. Pour la première version que j'avais imaginée, je souhaitais une navigation entre section qui se faisaient via un scroll "contrôlé". Je voulais que l'utilisateur utilise le scroll pour naviguer mais sans avoir la liberté de scroller n'importe où dans la page. Mais c'était compliqué à développer car il fallait retenir tout le parcours de l'utilisateur dans le site et je n'arrivais pas à rendre cela naturel et convaincant. 

A mi-chemin, j'ai décidé de revoir le design que je souhaitais plutôt que de perdre plus de temps sur cette fonctionnalité. Je n'ai pas revu toutes l'organisation du site, seulement la navigation et les transitions entre les pages. Néanmoins, j'en ai profité pour choisir une nouvelle charte graphique, car j'avais eu des retours mitigés sur la première. J'ai donc choisi des couleurs plus neutres, plus claires et moins contrastées. Par contre, j'ai gardé les mêmes polices. Vous trouverez ci-dessous les captures des pages d'accueil des deux versions. 


Première version:

![V1](src/images/V1.png)


Deuxième version:

![V2](src/images/V2.png)

## 3. Développement du site web<a id="developpement"></a>

La seconde étape du processus de création d'un site web après avoir fait le design de l'interface, est le développement du site. Il faut coder le site. Le projet est entièrement codé en Javascript, en utilisant la librairie React. La mise en forme a été faite en CSS et j'utilise Node.js pour gérer les packages. 

### a. Initialisation avec create-react-app<a id="react_app"></a>

Pour initialiser le projet, j'ai utilisé la commande suivante depuis le terminal de commande: 

> npx create-react-app cv-app 

Cette commande créé un dossier nommé (dans le cas de ce projet) __cv-app__ avec tous les scripts d'une application web qui comporte une seule page. La commande met en place tous les fichiers de configuration du site et un début d'arborescence pour les scripts. Cette page web est le point de départ pour construire des applications plus complexes. 

Ensuite, tout au long du développement en local, pour observer toutes les modifications effectuées, il faut se placer dans le dossier du projet et lancer la commande suivante: 

> npm start

Cette commande lance en local les scripts du dossier depuis lequel elle a été lancé en local. Ainsi, quand cette commande est lancée, toutes les modifications apportées aux scripts sont visibles à l'adresse: http://localhost:3000/. 

Enfin, la commande: 

> npm build 

permet de créer un script static pour la mise en ligne du site.

### b. Organisation du src et des composants<a id="organisation"></a>

Dans cette partie, je vais vous expliquer comment s'organise l'arborescence du dossier qui contient les scripts de mon site. Celle-ci est plus compliquée que celle mise en place par la commande 

> create-react-app

Cela se justifie par le fait que le site final comporte plusieurs components et des ressources de plusieurs types. En effet, j'ai classé les éléments de ce dossier par type.

Voici sous forme de liste l'arborescence du dossier et ce que contient chaque sous-dossier:

- cv-app: dossier racine
	- node_modules : contient tous les packages à télécharger pour lancer les scripts (dans .git ignore)
	- public : contient les scripts en html
		- files: contient les pdf téléchargeables depuis l'application
	- src : contient tous les scripts en javascripts
		- components : contient tous les composants React
		- css : contient tous les scripts css (mise en forme) 
		- fonts : contient tous les fichiers *.ttf* (polices utilisées)
		- images : dossier contennant toutes les images 
		- index.js : script qui appelle le index.html

### c. Outils et librairies utilisées <a id="librairies"></a>

Voici la liste des librairies que j'ai utilisé dans le cadre de ce projet (liste également disponible dans package.json):

- @brainhubeu/react-carousel: pour le carousel dans la partie **Projets** de l'application;
- @mui/material & @mui/styles: material ui est une librairie react avec beaucoup de components pour créer une interface interactive;
- emailjs-com: permet d'ajouter la fonctionnalité pour envoyer un mail dans la partie **Contacts**; 
- react-router-dom: permet de déclarer des routes statiques;
- react-scroll: permet de supporter l'event scroll;
- react-typed: permet de créer l'animation effet "machine à écrire".

## 4. Mise en ligne sur netlify<a id="mise_en_ligne"></a>

Pour mettre en ligne le site j'ai utilisé le site Netlify. Netlify est une entreprise qui propose des services d'hébergement et de cloud computing sans serveur pour les sites web statiques. Le service de mise en ligne offert par Netlify est facile car tout se fait depuis l'interface graphique du site.

Pour cela, il créer un compte Netlify, puis le lier à au compte GitHub. Ensuite, depuis l'interface de Netlify, il suffit sélectionner le repository GitHub qui contient les scripts du site puis le déploiement se lance automatiquement. L'avantage de lier son compte GitHub et Netlify, est que Netlify redéploie le site à chaque nouveau push effectué sur le repository associé. Ainsi, le site se met à jour automatiquement. De plus, Netlify, offre la possibilité de customiser le nom de l'URL de votre site.

## Conclusion<a id="conclusion"></a> 

Finalement, le site est fonctionnel. Néanmoins, il reste quelques améliorations à réaliser comme le rendre disponible sur mobile ou fluidifier les interactions. 





