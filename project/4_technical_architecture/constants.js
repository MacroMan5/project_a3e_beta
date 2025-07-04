// constants.js - Standards améliorés pour les diagrammes Mermaid A3E
// Ce fichier sert de référence centrale pour standardiser tous les diagrammes Mermaid
// Version améliorée avec accessibilité WCAG 2.1 AA et domaines étendus

/**
 * Initialisation standard pour tous les diagrammes Mermaid
 * Utilise le thème 'base' optimisé pour la lisibilité
 */
const MERMAID_INIT = `%%{init: {'theme': 'base', 'themeVariables': { 'primaryColor': '#f5f5f5', 'lineColor': '#999', 'fontFamily': 'Roboto, sans-serif'}}}%%`;

/**
 * Couleurs standards par domaine fonctionnel
 */
const COLORS = {
    // Architecture technique - Couleurs saturées avec bon contraste
    FRONTEND: { fill: '#1976D2', stroke: '#0D47A1', color: 'white' },
    BACKEND: { fill: '#2E7D32', stroke: '#1B5E20', color: 'white' },
    DATA: { fill: '#EF6C00', stroke: '#E65100', color: 'white' },
    AI: { fill: '#AD1457', stroke: '#880E4F', color: 'white' },
    INFRASTRUCTURE: { fill: '#1565C0', stroke: '#0D47A1', color: 'white' },
    SECURITY: { fill: '#4A148C', stroke: '#311B92', color: 'white' },
    MOBILE: { fill: '#00838F', stroke: '#006064', color: 'white' },
    API: { fill: '#6A1B9A', stroke: '#4A148C', color: 'white' },

    // Business model & stratégie - Couleurs pastel avec meilleur contraste
    VALUE: { fill: '#E8F5E8', stroke: '#2E7D32', color: '#1B5E20' },
    CLIENTS: { fill: '#E0F2F1', stroke: '#00695C', color: '#004D40' },
    CHANNELS: { fill: '#F1F8E9', stroke: '#558B2F', color: '#33691E' },
    RELATIONS: { fill: '#FCE4EC', stroke: '#C2185B', color: '#880E4F' },
    PARTNERS: { fill: '#E3F2FD', stroke: '#1976D2', color: '#0D47A1' },
    ACTIVITIES: { fill: '#F3E5F5', stroke: '#7B1FA2', color: '#4A148C' },
    RESOURCES: { fill: '#FFF3E0', stroke: '#F57C00', color: '#E65100' },
    REVENUE: { fill: '#E8EAF6', stroke: '#3F51B5', color: '#1A237E' },
    COSTS: { fill: '#FFF8E1', stroke: '#F9A825', color: '#F57F17' },

    // Planning & roadmap - Couleurs plus distinctes avec priorités
    PHASE: { fill: '#B3E5FC', stroke: '#0277BD', color: '#01579B' },
    MILESTONE: { fill: '#F8BBD0', stroke: '#C2185B', color: '#880E4F' },
    TASK: { fill: '#C8E6C9', stroke: '#388E3C', color: '#1B5E20' },
    RISK: { fill: '#FFCCBC', stroke: '#E64A19', color: '#BF360C' },
    PRIORITY_HIGH: { fill: '#FFCDD2', stroke: '#D32F2F', color: '#B71C1C' },
    PRIORITY_MEDIUM: { fill: '#FFF3E0', stroke: '#F57C00', color: '#E65100' },
    PRIORITY_LOW: { fill: '#E8F5E8', stroke: '#388E3C', color: '#1B5E20' },

    // Validation & hypothèses - Palette élargie
    HYPOTHESIS: { fill: '#D1C4E9', stroke: '#673AB7', color: '#311B92' },
    EXPERIMENT: { fill: '#B2DFDB', stroke: '#00695C', color: '#004D40' },
    METRICS: { fill: '#BBDEFB', stroke: '#1976D2', color: '#0D47A1' },
    VALIDATION: { fill: '#C8E6C9', stroke: '#388E3C', color: '#1B5E20' },
    INVALIDATION: { fill: '#FFCDD2', stroke: '#D32F2F', color: '#B71C1C' },
    
    // Nouveaux domaines - Processus décisionnel
    DECISION: { fill: '#FFF3E0', stroke: '#F57C00', color: '#E65100' },
    APPROVAL: { fill: '#E8F5E8', stroke: '#388E3C', color: '#1B5E20' },
    REJECTION: { fill: '#FFEBEE', stroke: '#E53935', color: '#B71C1C' },
    PENDING: { fill: '#F3E5F5', stroke: '#7B1FA2', color: '#4A148C' },
    
    // Rôles & responsabilités
    MANAGER: { fill: '#E3F2FD', stroke: '#1976D2', color: '#0D47A1' },
    DEVELOPER: { fill: '#E8F5E8', stroke: '#388E3C', color: '#1B5E20' },
    DESIGNER: { fill: '#FCE4EC', stroke: '#C2185B', color: '#880E4F' },
    STAKEHOLDER: { fill: '#FFF3E0', stroke: '#F57C00', color: '#E65100' },
    CLIENT: { fill: '#F3E5F5', stroke: '#7B1FA2', color: '#4A148C' },
    
    // Statuts de projet
    ACTIVE: { fill: '#E8F5E8', stroke: '#43A047', color: '#1B5E20' },
    COMPLETED: { fill: '#E0F2F1', stroke: '#00695C', color: '#004D40' },
    BLOCKED: { fill: '#FFCDD2', stroke: '#D32F2F', color: '#B71C1C' },
    ON_HOLD: { fill: '#FFF3E0', stroke: '#F57C00', color: '#E65100' },
    CANCELLED: { fill: '#F5F5F5', stroke: '#616161', color: '#212121' }
};

/**
 * Définitions CSS pour les classes Mermaid
 */
const CLASS_DEFINITIONS = {
    // Architecture technique
    TECHNICAL: `
    classDef frontend fill:${COLORS.FRONTEND.fill},stroke:${COLORS.FRONTEND.stroke},color:${COLORS.FRONTEND.color}
    classDef backend fill:${COLORS.BACKEND.fill},stroke:${COLORS.BACKEND.stroke},color:${COLORS.BACKEND.color}
    classDef data fill:${COLORS.DATA.fill},stroke:${COLORS.DATA.stroke},color:${COLORS.DATA.color}
    classDef ai fill:${COLORS.AI.fill},stroke:${COLORS.AI.stroke},color:${COLORS.AI.color}
    classDef infra fill:${COLORS.INFRASTRUCTURE.fill},stroke:${COLORS.INFRASTRUCTURE.stroke},color:${COLORS.INFRASTRUCTURE.color}
    classDef security fill:${COLORS.SECURITY.fill},stroke:${COLORS.SECURITY.stroke},color:${COLORS.SECURITY.color}
  `,

    // Business model & stratégie
    BUSINESS: `
    classDef value fill:${COLORS.VALUE.fill},stroke:${COLORS.VALUE.stroke},color:${COLORS.VALUE.color},font-size:14px
    classDef clients fill:${COLORS.CLIENTS.fill},stroke:${COLORS.CLIENTS.stroke},color:${COLORS.CLIENTS.color},font-size:14px
    classDef channels fill:${COLORS.CHANNELS.fill},stroke:${COLORS.CHANNELS.stroke},color:${COLORS.CHANNELS.color},font-size:14px
    classDef relations fill:${COLORS.RELATIONS.fill},stroke:${COLORS.RELATIONS.stroke},color:${COLORS.RELATIONS.color},font-size:14px
    classDef partners fill:${COLORS.PARTNERS.fill},stroke:${COLORS.PARTNERS.stroke},color:${COLORS.PARTNERS.color},font-size:14px
    classDef activities fill:${COLORS.ACTIVITIES.fill},stroke:${COLORS.ACTIVITIES.stroke},color:${COLORS.ACTIVITIES.color},font-size:14px
    classDef resources fill:${COLORS.RESOURCES.fill},stroke:${COLORS.RESOURCES.stroke},color:${COLORS.RESOURCES.color},font-size:14px
    classDef revenue fill:${COLORS.REVENUE.fill},stroke:${COLORS.REVENUE.stroke},color:${COLORS.REVENUE.color},font-size:14px
    classDef costs fill:${COLORS.COSTS.fill},stroke:${COLORS.COSTS.stroke},color:${COLORS.COSTS.color},font-size:14px
  `,

    // Planning & roadmap
    PLANNING: `
    classDef phase fill:${COLORS.PHASE.fill},stroke:${COLORS.PHASE.stroke},color:${COLORS.PHASE.color},font-size:14px
    classDef milestone fill:${COLORS.MILESTONE.fill},stroke:${COLORS.MILESTONE.stroke},color:${COLORS.MILESTONE.color},font-size:14px
    classDef task fill:${COLORS.TASK.fill},stroke:${COLORS.TASK.stroke},color:${COLORS.TASK.color},font-size:14px
    classDef risk fill:${COLORS.RISK.fill},stroke:${COLORS.RISK.stroke},color:${COLORS.RISK.color},font-size:14px
    classDef priorityHigh fill:${COLORS.PRIORITY_HIGH.fill},stroke:${COLORS.PRIORITY_HIGH.stroke},color:${COLORS.PRIORITY_HIGH.color},font-size:14px
    classDef priorityMedium fill:${COLORS.PRIORITY_MEDIUM.fill},stroke:${COLORS.PRIORITY_MEDIUM.stroke},color:${COLORS.PRIORITY_MEDIUM.color},font-size:14px
    classDef priorityLow fill:${COLORS.PRIORITY_LOW.fill},stroke:${COLORS.PRIORITY_LOW.stroke},color:${COLORS.PRIORITY_LOW.color},font-size:14px
  `,

    // Validation & hypothèses
    VALIDATION: `
    classDef hypothesis fill:${COLORS.HYPOTHESIS.fill},stroke:${COLORS.HYPOTHESIS.stroke},color:${COLORS.HYPOTHESIS.color},font-size:14px
    classDef experiment fill:${COLORS.EXPERIMENT.fill},stroke:${COLORS.EXPERIMENT.stroke},color:${COLORS.EXPERIMENT.color},font-size:14px
    classDef metrics fill:${COLORS.METRICS.fill},stroke:${COLORS.METRICS.stroke},color:${COLORS.METRICS.color},font-size:14px
    classDef validation fill:${COLORS.VALIDATION.fill},stroke:${COLORS.VALIDATION.stroke},color:${COLORS.VALIDATION.color},font-size:14px
    classDef invalidation fill:${COLORS.INVALIDATION.fill},stroke:${COLORS.INVALIDATION.stroke},color:${COLORS.INVALIDATION.color},font-size:14px
  `,
  
  // Processus décisionnel
  DECISION: `
    classDef decision fill:${COLORS.DECISION.fill},stroke:${COLORS.DECISION.stroke},color:${COLORS.DECISION.color},font-size:14px
    classDef approval fill:${COLORS.APPROVAL.fill},stroke:${COLORS.APPROVAL.stroke},color:${COLORS.APPROVAL.color},font-size:14px
    classDef rejection fill:${COLORS.REJECTION.fill},stroke:${COLORS.REJECTION.stroke},color:${COLORS.REJECTION.color},font-size:14px
    classDef pending fill:${COLORS.PENDING.fill},stroke:${COLORS.PENDING.stroke},color:${COLORS.PENDING.color},font-size:14px
  `,
  
  // Rôles & organisation
  ROLES: `
    classDef manager fill:${COLORS.MANAGER.fill},stroke:${COLORS.MANAGER.stroke},color:${COLORS.MANAGER.color},font-size:14px
    classDef developer fill:${COLORS.DEVELOPER.fill},stroke:${COLORS.DEVELOPER.stroke},color:${COLORS.DEVELOPER.color},font-size:14px
    classDef designer fill:${COLORS.DESIGNER.fill},stroke:${COLORS.DESIGNER.stroke},color:${COLORS.DESIGNER.color},font-size:14px
    classDef stakeholder fill:${COLORS.STAKEHOLDER.fill},stroke:${COLORS.STAKEHOLDER.stroke},color:${COLORS.STAKEHOLDER.color},font-size:14px
    classDef client fill:${COLORS.CLIENT.fill},stroke:${COLORS.CLIENT.stroke},color:${COLORS.CLIENT.color},font-size:14px
  `,
  
  // Statuts de projet
  STATUS: `
    classDef active fill:${COLORS.ACTIVE.fill},stroke:${COLORS.ACTIVE.stroke},color:${COLORS.ACTIVE.color},font-size:14px
    classDef completed fill:${COLORS.COMPLETED.fill},stroke:${COLORS.COMPLETED.stroke},color:${COLORS.COMPLETED.color},font-size:14px
    classDef blocked fill:${COLORS.BLOCKED.fill},stroke:${COLORS.BLOCKED.stroke},color:${COLORS.BLOCKED.color},font-size:14px
    classDef onHold fill:${COLORS.ON_HOLD.fill},stroke:${COLORS.ON_HOLD.stroke},color:${COLORS.ON_HOLD.color},font-size:14px
    classDef cancelled fill:${COLORS.CANCELLED.fill},stroke:${COLORS.CANCELLED.stroke},color:${COLORS.CANCELLED.color},font-size:14px
  `
};

/**
 * Templates pour différents types de diagrammes
 */
const TEMPLATES = {
    // Diagramme de flux vertical (top-down)
    FLOW_TD: `
${MERMAID_INIT}
graph TD
    %% Contenu du diagramme ici
    
    %% Définition des classes
    ${CLASS_DEFINITIONS.TECHNICAL}
    
    %% Application des classes
    %% class Node1,Node2 frontend
  `,

    // Diagramme de flux horizontal (left-right)
    FLOW_LR: `
${MERMAID_INIT}
graph LR
    %% Contenu du diagramme ici
    
    %% Définition des classes
    ${CLASS_DEFINITIONS.TECHNICAL}
    
    %% Application des classes
    %% class Node1,Node2 frontend
  `,

    // Diagramme Gantt pour planning
    GANTT: `
${MERMAID_INIT}
gantt
    title Titre du Planning
    dateFormat  MM-YYYY
    axisFormat  %m-%Y
    
    section Section 1
    Tâche A       :a1, 07-2025, 2M
    Tâche B       :a2, after a1, 1M
  `,

    // Business Model Canvas
    BMC: `
${MERMAID_INIT}
graph TD
    subgraph BMC ["🏗️ BUSINESS MODEL CANVAS"]
        %% Contenu du BMC ici
    end
    
    %% Définition des classes
    ${CLASS_DEFINITIONS.BUSINESS}
    
    %% Application des classes
    %% class VP value
  `,

    // Diagramme de validation d'hypothèses
    VALIDATION: `
${MERMAID_INIT}
graph TD
    %% Contenu de validation ici
    
    %% Définition des classes
    ${CLASS_DEFINITIONS.VALIDATION}
    
    %% Application des classes
    %% class H1 hypothesis
  `,

    // Diagramme Timeline pour roadmaps et planification temporelle
    TIMELINE: `
${MERMAID_INIT}
timeline
    title Titre de la Timeline
    
    section Phase 1
        Milestone 1 : Task A : Task B
        Milestone 2 : Task C
    
    section Phase 2
        Milestone 3 : Task D : Task E : Task F
        Milestone 4 : Task G
  `,
  
    // Diagramme d'organisation (Organigramme)
    ORGANIZATION: `
${MERMAID_INIT}
graph TD
    subgraph ORG ["📊 STRUCTURE ORGANISATIONNELLE"]
        CEO[CEO/Directeur Général]
        CTO[CTO/Directeur Technique]
        CPO[CPO/Directeur Produit]
        
        CEO --> CTO
        CEO --> CPO
        
        DEV1[Développeur Senior]
        DEV2[Développeur Junior]
        DES1[Designer UX/UI]
        
        CTO --> DEV1
        CTO --> DEV2
        CPO --> DES1
    end
    
    %% Définition des classes
    ${CLASS_DEFINITIONS.ROLES}
    
    %% Application des classes
    %% class CEO,CTO,CPO manager
    %% class DEV1,DEV2 developer
    %% class DES1 designer
  `,
  
    // Matrice de risques et opportunités
    RISK_MATRIX: `
${MERMAID_INIT}
quadrantChart
    title Matrice Impact vs Probabilité
    x-axis Low Probabilité High
    y-axis Low Impact High
    quadrant-1 Surveiller
    quadrant-2 Mitiger Activement
    quadrant-3 Ignorer
    quadrant-4 Surveiller & Préparer
    
    Risque A: [0.3, 0.8]
    Risque B: [0.7, 0.6]
    Risque C: [0.1, 0.2]
    Opportunité X: [0.8, 0.9]
  `,
  
    // Diagramme de processus décisionnel
    DECISION_FLOW: `
${MERMAID_INIT}
graph TD
    START[Début du Processus] --> EVAL{Évaluation Initiale}
    EVAL -->|Valide| APPROVE[Approuvé]
    EVAL -->|Invalide| REJECT[Rejeté]
    EVAL -->|À réviser| PENDING[En Attente]
    
    PENDING --> REVIEW[Révision]
    REVIEW --> EVAL
    
    APPROVE --> END[Fin - Implémentation]
    REJECT --> END2[Fin - Archivage]
    
    %% Définition des classes
    ${CLASS_DEFINITIONS.DECISION}
    
    %% Application des classes
    %% class APPROVE approval
    %% class REJECT rejection
    %% class PENDING pending
    %% class EVAL decision
  `,
  
    // Diagramme de statut de projet
    PROJECT_STATUS: `
${MERMAID_INIT}
graph LR
    NEW[Nouveau Projet] --> ACTIVE[En Cours]
    ACTIVE --> COMPLETED[Terminé]
    ACTIVE --> BLOCKED[Bloqué]
    ACTIVE --> ON_HOLD[En Pause]
    
    BLOCKED --> ACTIVE
    ON_HOLD --> ACTIVE
    ON_HOLD --> CANCELLED[Annulé]
    
    %% Définition des classes
    ${CLASS_DEFINITIONS.STATUS}
    
    %% Application des classes
    %% class ACTIVE active
    %% class COMPLETED completed
    %% class BLOCKED blocked
    %% class ON_HOLD onHold
    %% class CANCELLED cancelled
  `,
  
    // Template pour architecture technique modulaire
    ARCHITECTURE: `
${MERMAID_INIT}
graph TD
    subgraph FRONTEND ["🖥️ FRONTEND"]
        WEB[Application Web]
        MOBILE[Application Mobile]
    end
    
    subgraph BACKEND ["⚙️ BACKEND"]
        API[API Gateway]
        SERVICES[Microservices]
    end
    
    subgraph DATA ["🗄️ DONNÉES"]
        DB[Base de Données]
        CACHE[Cache Redis]
    end
    
    WEB --> API
    MOBILE --> API
    API --> SERVICES
    SERVICES --> DB
    SERVICES --> CACHE
    
    %% Définition des classes
    ${CLASS_DEFINITIONS.TECHNICAL}
    
    %% Application des classes
    %% class WEB,MOBILE frontend
    %% class API,SERVICES backend
    %% class DB,CACHE data
  `
};

module.exports = {
    MERMAID_INIT,
    COLORS,
    CLASS_DEFINITIONS,
    TEMPLATES
};
