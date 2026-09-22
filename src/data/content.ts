// Contenu réel — Redouane Assani, alternant BTS SIO SISR
// Portfolio livré par Portfolio For U (formule Clé en main)

export const profile = {
  name: 'Redouane Assani',
  role: 'Alternant Administration & Sécurité des Réseaux',
  tagline:
    "Je conçois, sécurise et supervise des infrastructures réseau — du plan d'adressage à la centralisation des journaux.",
  location: 'Bourgoin-Jallieu (38)',
  email: 'redouane.assani@gmail.com',
  cv: '/assets/CV-ASSANI-Redouane.pdf',
  availability: 'En recherche d\'une alternance 2026-2027',
}

export const stats = [
  { value: '2', label: "projets d'infrastructure complets" },
  { value: '1 an', label: "d'alternance en cours" },
  { value: 'B2+', label: 'anglais technique' },
]

export const about = {
  paragraphs: [
    "Actuellement en 2ᵉ année de BTS SIO option SISR (Solutions d'Infrastructure, Systèmes et Réseaux) au lycée privé Saint Marc à Bourgoin-Jallieu, en alternance chez Numerik's Pro où je gère pare-feux, parcs informatiques et support technique au quotidien.",
    "J'ai construit deux infrastructures complètes en maquette (Proxmox) pour l'épreuve E5 du BTS : une base réseau sécurisée avec pare-feu, DMZ et supervision, puis une couche d'authentification centralisée avec Active Directory et Wi-Fi 802.1X.",
    "En dehors du réseau, 15 ans de rugby — dont un passage au centre de formation du CSBJ — m'ont appris la rigueur et le travail d'équipe, deux réflexes que je retrouve dans la façon dont j'aborde un projet d'infrastructure.",
  ],
}

export const experienceIntro =
  "Une alternance en cours et deux stages qui m'ont fait passer du support utilisateur à la conception d'infrastructures — avec, en toile de fond, deux années de BTS SIO option SISR."

export const experience = [
  {
    period: 'Sept. 2025 — Mai 2026',
    title: 'BTS SIO SISR — 2ᵉ année, alternance',
    org: 'Lycée privé Saint Marc, Bourgoin-Jallieu',
    description:
      "Approfondissement en administration système et réseaux en environnement professionnel.",
  },
  {
    period: "Depuis sept. 2025 (jusqu'au 31/07/2026)",
    title: "Alternant technicien réseau — Numerik's Pro",
    org: 'Bourgoin-Jallieu',
    description:
      "Support informatique et gestion d'infrastructure client au quotidien.",
    skillsGained: [
      'Diagnostic à domicile',
      'Pare-feu client (WatchGuard)',
      'Gestion multi-parcs',
      'Support à distance & sur site',
    ],
  },
  {
    period: 'Juin — Juillet 2025',
    title: 'Stage — MD6 Consulting',
    org: 'Strasbourg',
    description:
      "Installation d'ordinateurs et de serveurs, découverte des différents services de l'entreprise.",
  },
  {
    period: 'Sept. 2024 — Juin 2025',
    title: 'BTS SIO SISR — 1ʳᵉ année, parcours initial',
    org: 'Lycée Le Castel, Dijon',
    description: 'Bases en administration système et réseaux.',
  },
  {
    period: 'Baccalauréat',
    title: 'Bac Général — spécialités Mathématiques, NSI',
    org: 'Lycée Arbez Carme, Bellignat',
    description: 'Mention obtenue en gardant deux spécialités scientifiques jusqu\'au bout.',
  },
]

export const languages = [
  { flag: '🇫🇷', label: 'Français', level: 'Langue maternelle' },
  { flag: '🇬🇧', label: 'Anglais', level: 'Niveau B2+' },
  { flag: '🇪🇸', label: 'Espagnol', level: 'Niveau A2+' },
]

export const interests = [
  {
    icon: '🏉',
    title: 'Rugby',
    subtitle: '15 ans de pratique, dont le centre de formation du CSBJ Rugby',
    description:
      "Une expérience qui développe rigueur, esprit d'équipe et gestion du temps entre sport de haut niveau et exigences académiques.",
  },
  {
    icon: '💻',
    title: 'Tech & gaming',
    subtitle: 'Veille technologique régulière',
    description:
      "Passionné par l'informatique et l'univers du jeu vidéo, avec un suivi régulier des évolutions matérielles et logicielles.",
  },
]

export const skills = [
  {
    category: 'Réseaux',
    items: ['Modèle OSI', 'TCP/IP', 'VLAN', 'Routage inter-VLAN', 'Stormshield', 'Wi-Fi 802.1X'],
  },
  {
    category: 'Systèmes',
    items: ['Windows Server', 'Linux (Debian/Ubuntu)', 'VirtualBox', 'Proxmox'],
  },
  {
    category: 'Sécurité',
    items: ['Firewall', 'VPN', 'Active Directory', 'NPS / RADIUS', 'Gestion des droits'],
  },
  {
    category: 'Outils',
    items: ['Cisco Packet Tracer', 'Wireshark', 'Active Directory', 'Rsyslog'],
  },
]

export const referentiel = [
  {
    epreuve: 'E4 — Support & mise à disposition',
    valide: "Réponse aux attentes des utilisateurs, accompagnement de la transformation numérique",
    projets: 'NAS Synology, VPN OpenVPN, procédures client (NAS, licences Google Workspace)',
  },
  {
    epreuve: 'E5 — Administration des systèmes et réseaux',
    valide: "Conception, déploiement et sécurisation d'infrastructures",
    projets: "Infrastructure Stormshield/TrueNAS (Projet 1), Active Directory & Wi-Fi 802.1X (Projet 2)",
  },
]

export type Project = {
  slug: string
  title: string
  client: string
  tag: string
  role: string
  duration: string
  description: string
  result: string
  context: string
  objectives: string[]
  actions: string[]
  results: { value: string; label: string }[]
  tools: string[]
  learned: string
  infraCards: { title: string; items: string[] }[]
  addressing: { vlan: string; name: string; network: string; gateway: string; usage: string }[]
  docLink: string
  docLabel: string
  problems?: string[]
  flowSteps?: string[]
  flowNote?: string
}

export const projects: Project[] = [
  {
    slug: 'infrastructure-reseau-securisee',
    title: 'Infrastructure réseau sécurisée',
    client: 'PME fictive (maquette BTS SIO)',
    tag: 'Réseaux & sécurité',
    role: 'Conception & déploiement — épreuve E5',
    duration: 'Maquette Proxmox · BTS SIO SISR',
    description:
      "Pare-feu Stormshield, DMZ, NAS TrueNAS et VPN SSL, avec centralisation des journaux via Rsyslog.",
    result: 'Infrastructure segmentée et supervisée, prête à accueillir le Projet 2',
    context:
      "Dans le cadre de l'épreuve E5 du BTS SIO SISR, il fallait concevoir une infrastructure réseau complète pour une PME fictive de 40 employés : accès Internet sécurisé, stockage centralisé, et une base saine pour ajouter ensuite l'authentification des utilisateurs (Projet 2). Maquette réalisée intégralement sur un serveur Proxmox.",
    objectives: [
      'Segmenter le réseau en VLANs pour isoler les usages (postes clients, DMZ)',
      "Sécuriser l'accès distant avec un VPN SSL plutôt qu'un accès direct",
      'Centraliser le stockage et les journaux pour garder une visibilité sur l\'infrastructure',
    ],
    actions: [
      'Configuration du pare-feu Stormshield en firewall-on-a-stick avec routage inter-VLAN et politique de filtrage par sections',
      'Déploiement d\'un switch Cisco CBS220 avec VLAN 2090 (LAN) et VLAN 2092 (DMZ), lien trunk taggé vers le Stormshield',
      'Installation d\'un NAS TrueNAS en DMZ pour le stockage centralisé (partages SMB/NFS)',
      'Mise en place d\'une VM Rsyslog recevant les journaux du Stormshield et du TrueNAS',
      'Configuration du VPN SSL avec un pool d\'adresses dédié (10.8.0.0/24) pour les accès distants',
    ],
    results: [
      { value: '4', label: 'VLAN / réseaux distincts configurés' },
      { value: '2', label: 'sources de logs centralisées (Rsyslog)' },
      { value: '1', label: 'accès distant sécurisé par VPN SSL' },
    ],
    tools: ['Stormshield', 'Cisco CBS220', 'Proxmox', 'TrueNAS', 'Rsyslog', 'OpenVPN'],
    learned:
      "Ce projet m'a appris à raisonner en couches : segmenter d'abord, sécuriser les flux entre segments ensuite, et ne centraliser les logs qu'une fois l'architecture stable — sinon on passe son temps à débugger le mauvais problème.",
    infraCards: [
      {
        title: 'Firewall Stormshield',
        items: ['Routage inter-VLAN (firewall-on-a-stick)', 'Politique de filtrage par sections', 'NAT / accès Internet', 'DHCP pour le VLAN 2090'],
      },
      {
        title: 'Switch Cisco CBS220',
        items: ['VLAN 2090 — LAN principal', 'VLAN 2092 — DMZ', 'Lien trunk taggé vers le Stormshield'],
      },
      {
        title: 'Serveur Proxmox',
        items: ['Hyperviseur de la maquette', 'Hébergement des VMs (client, log)', 'Bridges réseau avec tag VLAN'],
      },
      {
        title: 'TrueNAS',
        items: ['NAS réseau (partages SMB/NFS)', 'Stockage centralisé', 'Envoi des logs vers le serveur Syslog'],
      },
      {
        title: 'VM Rsyslog',
        items: ['Centralisation des journaux', 'Sources : Stormshield + TrueNAS', 'VLAN 2090 — 172.16.209.x'],
      },
      {
        title: 'VM cliente',
        items: ['Poste client de test (VLAN 2090)', 'Adresse DHCP via le Stormshield'],
      },
    ],
    addressing: [
      { vlan: 'WAN', name: 'OUT', network: 'DHCP classe', gateway: '—', usage: 'Accès Internet' },
      { vlan: '2090', name: 'LAN', network: '172.16.209.0/24', gateway: '172.16.209.1', usage: 'Postes clients, Rsyslog, TrueNAS' },
      { vlan: '2092', name: 'DMZ', network: '172.119.201.0/24', gateway: '172.119.201.1', usage: 'NAS TrueNAS isolé (DMZ)' },
      { vlan: '—', name: 'VPN Pool SSL', network: '10.8.0.0/24', gateway: '—', usage: 'Clients VPN SSL distants' },
    ],
    docLink: '/assets/documentation-technique-projet1.pdf',
    docLabel: 'Documentation technique complète (PDF)',
  },
  {
    slug: 'active-directory-wifi-8021x',
    title: 'Active Directory & Wi-Fi 802.1X',
    client: 'SimCorp Solutions (PME fictive, 40 employés)',
    tag: 'Identité & accès',
    role: 'Conception & déploiement — épreuve E5',
    duration: 'Maquette Proxmox · BTS SIO SISR',
    description:
      "Centralisation de l'authentification avec Active Directory et sécurisation de l'accès Wi-Fi via NPS/RADIUS en 802.1X.",
    result: 'Authentification centralisée et accès Wi-Fi nominatif, traçable et révocable',
    context:
      "SimCorp Solutions, PME fictive de 40 employés, gérait ses comptes en local sur chaque poste et son Wi-Fi avec une simple clé partagée : aucune traçabilité, aucune politique de sécurité uniforme. Le projet s'appuie sur l'infrastructure du Projet 1 (pare-feu, switch, Proxmox, Rsyslog) et y ajoute un contrôleur de domaine et des bornes Wi-Fi en 802.1X.",
    objectives: [
      'Centraliser la gestion des comptes utilisateurs avec un Active Directory',
      'Remplacer la clé Wi-Fi partagée par une authentification nominative (802.1X)',
      'Rendre chaque connexion traçable et révocable individuellement',
    ],
    actions: [
      'Déploiement d\'un contrôleur de domaine Windows Server 2025 (AD DS + DNS + DHCP) sur le domaine simcorp.local',
      'Installation et configuration du rôle NPS (serveur RADIUS) sur le même serveur',
      'Configuration des bornes Wi-Fi Cisco en 802.1X / EAP-PEAP, en relais vers le NPS',
      'Ajout des VLANs 2091 (Wi-Fi) et 2093 (Serveurs) sur le Stormshield et le switch, avec filtrage inter-VLAN',
      'Création du groupe GRP_WiFi-Autorises dans l\'AD pour contrôler qui a droit au Wi-Fi',
    ],
    results: [
      { value: '2', label: 'VLAN supplémentaires (Wi-Fi, Serveurs)' },
      { value: '100%', label: 'connexions Wi-Fi nominatives et journalisées' },
      { value: '1', label: 'commande pour révoquer un accès (compte AD)' },
    ],
    tools: ['Windows Server 2025', 'Active Directory', 'NPS / RADIUS', 'Cisco (Wi-Fi 802.1X)', 'Stormshield'],
    learned:
      "Ce projet m'a fait comprendre concrètement pourquoi le 802.1X est plus robuste qu'une clé partagée : chaque connexion passe par une vérification individuelle, donc un accès compromis se révoque sans changer le mot de passe de tout le monde.",
    problems: [
      "Aucune gestion centralisée des utilisateurs : chaque poste utilisait un compte local",
      "Accès Wi-Fi non contrôlé : une simple clé WPA2 partagée suffisait à se connecter",
      "Aucune politique de sécurité uniforme : pas de verrouillage de session, pas de politique de mot de passe",
      "Aucune traçabilité : impossible de savoir qui s'est connecté au réseau Wi-Fi",
    ],
    infraCards: [
      {
        title: 'SRV-AD-01 — Windows Server 2025',
        items: ['Active Directory DS + DNS + DHCP', 'NPS (serveur RADIUS intégré)', 'Domaine simcorp.local — IP fixe 172.16.213.10'],
      },
      {
        title: 'Bornes Wi-Fi Cisco',
        items: ['Mode 802.1X — EAP-PEAP', "Rôle d'authenticator", 'Relaient les requêtes vers le NPS'],
      },
      {
        title: 'Stormshield — nouvelles règles',
        items: ['Interfaces VLAN 2091 et 2093 ajoutées', 'DHCP pour VLAN 2091 et 2093', 'Filtrage inter-VLAN (isolation Wi-Fi)'],
      },
      {
        title: 'Switch Cisco CBS220 — mis à jour',
        items: ['VLAN 2091 (Wi-Fi) ajouté', 'VLAN 2093 (Serveurs) ajouté', 'Trunk mis à jour'],
      },
    ],
    flowSteps: [
      "Le client Wi-Fi demande l'accès au réseau sans-fil.",
      "La borne Cisco bloque le trafic et demande des identifiants (EAP-PEAP).",
      "La borne relaye les identifiants vers le serveur NPS (RADIUS) — UDP 1812.",
      "Le NPS interroge l'Active Directory : le compte existe-t-il ? Est-il dans le groupe GRP_WiFi-Autorises ?",
      "Accès accordé (IP dans le VLAN 2091) ou connexion rejetée.",
    ],
    flowNote:
      'Chaque connexion est nominative, journalisée dans le Rsyslog et révocable en désactivant simplement le compte AD.',
    addressing: [
      { vlan: 'WAN', name: 'OUT', network: 'DHCP classe', gateway: '—', usage: 'Accès Internet' },
      { vlan: '2090', name: 'LAN Clients', network: '172.16.209.0/24', gateway: '172.16.209.1', usage: 'Postes clients, Rsyslog' },
      { vlan: '2091', name: 'Wi-Fi', network: '172.16.211.0/24', gateway: '172.16.211.1', usage: 'Bornes Cisco + clients Wi-Fi' },
      { vlan: '2092', name: 'DMZ', network: '(Projet 1)', gateway: '—', usage: 'Réservé Projet 1' },
      { vlan: '2093', name: 'Serveurs', network: '172.16.213.0/24', gateway: '172.16.213.1', usage: 'AD, NPS/RADIUS' },
    ],
    docLink: '/assets/documentation-technique-projet2.pdf',
    docLabel: 'Documentation technique complète (PDF)',
  },
]

export const otherWork = {
  intro:
    "Épreuve E4 — Support & mise à disposition : des réalisations plus ponctuelles, orientées utilisateur final, en complément des deux projets d'infrastructure.",
  items: [
    {
      title: 'NAS Synology DS225+',
      description:
        'Installation, RAID SHR/Btrfs, durcissement sécurité (2FA, Anti-DDoS, pare-feu DSM), sauvegardes locales et cloud (Hyper Backup).',
    },
    {
      title: 'VPN OpenVPN sur NAS',
      description:
        'Déploiement du VPN Server intégré au DSM, redirection de port NAT, export/import de la configuration client.',
    },
    {
      title: 'Documentation client',
      description:
        'Procédure de connexion au NAS (SMB) et procédure d\'ajout de licences Google Workspace via StreamOne Ion.',
    },
  ],
  docs: [
    { label: 'Tableau de synthèse E4 (PDF)', href: '/assets/tablsynt.pdf' },
    { label: 'Réalisation NAS Synology (PDF)', href: '/assets/realisationpro1.pdf' },
    { label: 'Procédure OpenVPN (PDF)', href: '/assets/MISE_EN_PLACE_OPEN_VPN.pdf' },
    { label: 'Procédure connexion NAS', href: '/assets/procedure-connexion-nas.pdf' },
    { label: 'Procédure licences Google Workspace', href: '/assets/procedure-licences-google-workspace.pdf' },
  ],
}

export const veille = {
  intro:
    "Une veille régulière sur les cyberattaques et la sécurité des données, appuyée notamment sur un serveur de veille mis en place par les professeurs du Lycée Le Castel (sources ANSSI, CERT-FR).",
  articles: [
    {
      date: '25/11/2024',
      source: 'Journal du Geek',
      title: 'Piratage de Free : Telegram contraint de livrer le hacker à la justice',
      subject:
        "en novembre 2024, l'opérateur télécoms Free a été victime de l'une des plus grandes cyberattaques jamais enregistrées en France. Un hacker a réussi à exfiltrer les données de 19 millions de clients, incluant des IBAN, et a annoncé la mise en vente de ces données sur Telegram.",
      problem:
        "Telegram refusait initialement de coopérer avec la justice française. Un tribunal a finalement ordonné à la plateforme de communiquer les données d'identification du hacker (téléphone, adresses IP). La vente n'a pas eu lieu, mais 100 000 numéros avaient déjà été publiés comme preuve.",
    },
    {
      date: '14/02/2025',
      source: 'Usine Digitale',
      title: 'Cyberattaque contre la Caisse des Dépôts : 70 000 personnes touchées',
      subject:
        "en février 2025, la Caisse des Dépôts a subi une cyberattaque ciblant sa plateforme Ircantec. Les données personnelles de 70 000 personnes ont été dérobées : noms, dates et lieux de naissance, numéros de sécurité sociale, adresses postales.",
      problem:
        "les attaquants n'ont pas exploité de faille technique classique, mais des identifiants volés d'employeurs du secteur public (credential stuffing), contournant les défenses sans alerte immédiate. La Caisse des Dépôts a notifié la CNIL, déposé plainte et renforcé ses contrôles d'accès.",
    },
  ],
}

export const contact = {
  heading: 'Une alternance à proposer ?',
  body: "À la recherche d'une alternance 2026-2027 dans le cadre d'une Licence Pro Administration et Sécurité des Réseaux.",
  availabilityNote: 'Basé à Bourgoin-Jallieu (38) — mobile en Auvergne-Rhône-Alpes.',
}
