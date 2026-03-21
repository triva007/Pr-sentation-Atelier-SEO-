import React, { useState, useEffect } from 'react';

function ProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = totalScroll / windowHeight;
      setScrollProgress(scroll * 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1.5 z-50 pointer-events-none bg-slate-200/20">
      <div 
        className="h-full bg-brand-primary transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      ></div>
    </div>
  );
}

function Hero() {
  return (
    <section className="bg-brand-dark text-white py-20 min-h-screen relative overflow-hidden flex items-center">
      <div className="absolute rounded-full z-0 pointer-events-none w-[600px] h-[600px] -top-[200px] -right-[200px] bg-[radial-gradient(circle,rgba(0,82,255,0.2)_0%,rgba(11,17,33,0)_70%)]"></div>
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
        <div>
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-bold tracking-wider uppercase mb-6 bg-yellow-400/15 text-yellow-400">
            Atelier Exclusif
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
            Votre entreprise mérite d'être <br /><span className="text-brand-primary">N°1 sur Google.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-8">
            Découvrez comment attirer des clients locaux toutes les semaines, sans dépendre du bouche-à-oreille et sans dépenser 1€ en publicité.
          </p>

          <div className="bg-red-500/5 border-2 border-dashed border-red-500 rounded-2xl p-6 md:p-8 relative mt-8">
            <div className="bg-red-500 text-white px-3 py-1.5 rounded-full text-xs font-extrabold tracking-widest inline-flex items-center gap-2 mb-4 animate-pulse-red">
              <span className="text-[10px]">🔴</span> POUR DÉMARRER
            </div>
            <h3 className="text-xl font-extrabold mb-2 text-white">Ouvrez Google sur votre téléphone.</h3>
            <p className="text-base text-white/80 mb-0">
              Tapez votre <strong>métier + votre ville</strong>.<br />
              <em className="text-slate-400">(Ex: "Créatrice de bijoux Rueil", "Assurance auto [Ville]", "Agence service à domicile [Ville]")</em><br /><br />
              Qui apparaît en premier ? Vous ? Ou votre concurrent direct ?
            </p>
          </div>
        </div>

        <div className="bg-brand-dark-card border border-blue-600/30 rounded-2xl p-8 text-white relative">
          <div className="absolute top-0 left-0 w-full h-1.5 bg-brand-primary rounded-t-2xl"></div>
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-bold tracking-wider uppercase mb-6 bg-white/10 text-white border border-white/20">
            LE CONSTAT
          </div>
          <h3 className="text-3xl font-extrabold mb-6">Le plafond de verre du "Bouche-à-Oreille"</h3>
          
          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="text-red-400 text-2xl mt-1">⚠️</div>
              <div>
                <h4 className="text-xl font-bold text-white mb-1">C'est imprévisible</h4>
                <p className="text-slate-300 text-base">Vous ne pouvez pas contrôler quand un client va vous recommander. C'est le stress des mois "creux" et la difficulté de se projeter.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="text-emerald-400 text-2xl mt-1">💡</div>
              <div>
                <h4 className="text-xl font-bold text-white mb-1">La solution Google</h4>
                <p className="text-slate-300 text-base">Être visible sur Google, c'est créer un apport de clients régulier et prédictible. Vous êtes trouvé par des gens qui ont besoin de vous <strong className="text-white">aujourd'hui</strong>.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function IdeesRecues() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-bold tracking-wider uppercase mb-6 bg-blue-600/10 text-brand-primary">
            RASSUREZ-VOUS
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">4 idées reçues à oublier ce soir.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
            <p className="line-through text-slate-500 mb-4 font-semibold">
              « Il faut payer des pubs pour être visible sur Google »
            </p>
            <div className="flex gap-3 items-start">
              <span className="text-emerald-500 text-2xl font-black leading-none">✓</span>
              <h4 className="text-lg font-bold text-slate-900">Le référencement naturel (SEO) est 100% gratuit et bien plus durable.</h4>
            </div>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
            <p className="line-through text-slate-500 mb-4 font-semibold">
              « L'informatique et moi, ça fait deux »
            </p>
            <div className="flex gap-3 items-start">
              <span className="text-emerald-500 text-2xl font-black leading-none">✓</span>
              <h4 className="text-lg font-bold text-slate-900">Pas besoin de coder. Je vais vous montrer des actions très simples à faire.</h4>
            </div>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
            <p className="line-through text-slate-500 mb-4 font-semibold">
              « Je n'ai absolument pas le temps »
            </p>
            <div className="flex gap-3 items-start">
              <span className="text-emerald-500 text-2xl font-black leading-none">✓</span>
              <h4 className="text-lg font-bold text-slate-900">30 minutes par semaine suffisent si vous faites les bonnes actions.</h4>
            </div>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
            <p className="line-through text-slate-500 mb-4 font-semibold">
              « Le SEO c'est gratuit, donc c'est facile »
            </p>
            <div className="flex gap-3 items-start">
              <span className="text-emerald-500 text-2xl font-black leading-none">✓</span>
              <h4 className="text-lg font-bold text-slate-900">C'est gratuit en argent, mais ça demande de la méthode et de la régularité.</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TourDeTable() {
  return (
    <section className="py-20 bg-slate-50 border-y border-slate-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-bold tracking-wider uppercase mb-6 bg-brand-primary/10 text-brand-primary">
            FAISONS CONNAISSANCE
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
            Tour de table (2 min / personne)
          </h2>
          <p className="text-lg text-slate-600 mb-8">Puisque nous sommes en petit comité, profitons-en pour personnaliser cet atelier. Présentez-vous rapidement :</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 text-center">
            <div className="text-4xl mb-4">👋</div>
            <h3 className="font-bold text-slate-900 mb-2">1. Qui êtes-vous ?</h3>
            <p className="text-slate-500 text-sm">Votre prénom et votre activité principale.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 text-center">
            <div className="text-4xl mb-4">🧲</div>
            <h3 className="font-bold text-slate-900 mb-2">2. Vos clients ?</h3>
            <p className="text-slate-500 text-sm">Comment trouvez-vous vos clients aujourd'hui ? (Bouche-à-oreille, Instagram, flyers...)</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="font-bold text-slate-900 mb-2">3. Votre objectif ?</h3>
            <p className="text-slate-500 text-sm">Qu'attendez-vous de cet atelier ce soir ?</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function DefinitionSEO() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-bold tracking-wider uppercase mb-6 bg-blue-600/10 text-brand-primary">
            LES BASES
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">C'est quoi le <span className="text-brand-primary">SEO</span> ?</h2>
          <p className="text-lg text-slate-600 mb-6">SEO signifie <strong>Search Engine Optimization</strong> (Optimisation pour les moteurs de recherche). C'est l'art d'aider Google à comprendre ce que vous faites pour qu'il vous présente en priorité à vos futurs clients.</p>
          
          <div className="bg-slate-50 border-l-4 border-brand-primary p-6 rounded-r-xl mt-8">
            <h3 className="text-xl font-bold text-slate-900 mb-2">📚 La métaphore de la bibliothèque</h3>
            <p className="text-slate-600 mb-0">Imaginez que Google est la plus grande bibliothèque du monde. Votre site web est un livre. Si votre livre n'a pas de titre clair, pas de résumé, et qu'il est rangé au sous-sol... personne ne le lira jamais. Le SEO, c'est mettre votre livre en vitrine avec une belle couverture pour que tout le monde le voie.</p>
          </div>
        </div>
        <div className="bg-brand-dark rounded-2xl p-10 text-white relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/20 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
          <h3 className="text-2xl font-extrabold mb-8 relative z-10">Le vocabulaire à retenir :</h3>
          <ul className="flex flex-col gap-8 relative z-10">
            <li>
              <strong className="text-yellow-400 text-xl block mb-2">1. Requête (ou Mot-clé)</strong>
              <span className="text-slate-300 text-base">Ce que l'internaute tape dans la barre de recherche (ex: "Plombier urgence Paris").</span>
            </li>
            <li>
              <strong className="text-yellow-400 text-xl block mb-2">2. Trafic Organique</strong>
              <span className="text-slate-300 text-base">Les visiteurs qui arrivent sur votre site naturellement, sans que vous ayez payé de publicité. C'est 100% gratuit.</span>
            </li>
            <li>
              <strong className="text-yellow-400 text-xl block mb-2">3. Positionnement (Ranking)</strong>
              <span className="text-slate-300 text-base">Votre place dans les résultats. Le but ultime ? Être dans les 3 premiers (le podium), car ils captent 75% des clics.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function CeQueVeutGoogle() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-bold tracking-wider uppercase mb-6 bg-emerald-500/10 text-emerald-600">
          L'OBJECTIF DE GOOGLE
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">Que veut <span className="text-emerald-500">Google</span> ?</h2>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-16">Beaucoup pensent que Google est un robot méchant qu'il faut piéger. C'est faux. Google est une entreprise qui a un seul et unique but : <strong className="text-slate-900">satisfaire ses utilisateurs pour qu'ils reviennent.</strong></p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">1. La Pertinence</h3>
            <p className="text-slate-600">Si je cherche une "Pizzeria", je ne veux pas voir un kebab. Google veut proposer le résultat qui répond EXACTEMENT à la demande de l'internaute.</p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">2. La Confiance</h3>
            <p className="text-slate-600">Google ne veut pas envoyer ses utilisateurs chez un escroc. Il cherche des preuves que vous êtes fiable (Avis clients, ancienneté, mentions légales).</p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">3. L'Expérience</h3>
            <p className="text-slate-600">Si votre site met 10 secondes à charger ou est illisible sur téléphone, l'utilisateur partira. Google le sait, et vous pénalisera pour ça.</p>
          </div>
        </div>

        <div className="mt-12 bg-brand-dark text-white rounded-2xl p-8 max-w-4xl mx-auto shadow-xl">
          <p className="text-xl font-medium mb-0">
            <span className="text-yellow-400 font-bold">Le secret :</span> Ne créez pas un site "pour plaire à Google". Créez le meilleur site possible pour vos clients, et Google vous récompensera naturellement.
          </p>
        </div>
      </div>
    </section>
  );
}

function SEOLocal() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-bold tracking-wider uppercase mb-6 bg-emerald-500/10 text-emerald-600">
          LA BONNE NOUVELLE
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">Vous ne jouez pas contre Amazon.</h2>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-12">Le SEO National (être premier sur "Chaussures") est une guerre de multinationales. Vous, votre terrain de jeu, c'est le <strong>SEO Local</strong>.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">🌍 La zone de chalandise</h3>
            <p className="text-slate-600">Google géolocalise les recherches. Si quelqu'un cherche "Plombier" à Bordeaux, Google ne montrera QUE des plombiers de Bordeaux. Votre seul objectif : être meilleur que les 5 autres plombiers de votre quartier.</p>
          </div>
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">📍 L'intention locale</h3>
            <p className="text-slate-600">46% des recherches sur Google ont une intention locale. Les gens cherchent "près de chez moi". C'est une audience ultra-qualifiée, prête à se déplacer ou à appeler immédiatement.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function InstagramVsGoogle() {
  return (
    <section className="bg-brand-dark text-white py-20 relative overflow-hidden">
      <div className="absolute rounded-full z-0 pointer-events-none w-[600px] h-[600px] -top-[200px] -right-[200px] bg-[radial-gradient(circle,rgba(250,204,21,0.15)_0%,rgba(11,17,33,0)_70%)]"></div>
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-bold tracking-wider uppercase mb-6 bg-yellow-400 text-brand-dark">
            LE DÉCLIC
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">Le grand piège :<br />Réseaux Sociaux vs Google</h2>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">Beaucoup d'indépendants s'épuisent à poster tous les jours sur Instagram ou Facebook pour 0 client. Comprendre cette différence va vous faire gagner un temps fou.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Les Réseaux Sociaux */}
          <div className="bg-red-500/5 border border-red-500/30 rounded-2xl p-10 flex flex-col">
            <h3 className="text-2xl font-extrabold text-red-400 mb-4">📱 Instagram / Facebook</h3>
            <p className="text-red-400 font-bold text-lg mb-4">= Le marketing de l'interruption</p>
            <p className="text-white/80 mb-6">Les gens sont là pour se détendre, regarder des vidéos de chats ou les vacances de leurs amis. Vous venez interrompre leur divertissement avec vos services.</p>
            <ul className="flex flex-col gap-3 mt-auto text-base">
              <li className="flex items-start gap-3"><span className="text-red-500">❌</span> <span>Il faut créer du contenu tout le temps.</span></li>
              <li className="flex items-start gap-3"><span className="text-red-500">❌</span> <span>Durée de vie d'un post : 24 heures.</span></li>
              <li className="flex items-start gap-3"><span className="text-red-500">❌</span> <span>Les gens ne sont pas prêts à acheter.</span></li>
            </ul>
          </div>

          {/* Google */}
          <div className="bg-emerald-500/5 border border-emerald-500/30 rounded-2xl p-10 flex flex-col">
            <h3 className="text-2xl font-extrabold text-emerald-300 mb-4">🔍 Google (Votre Site)</h3>
            <p className="text-emerald-400 font-bold text-lg mb-4">= Le marketing de l'intention</p>
            <p className="text-white/80 mb-6">Quand une personne tape "Créatrice de bijoux", "Assureur" ou "Ménage à domicile" sur Google, elle a un problème MAINTENANT et sa carte bleue est presque déjà sortie.</p>
            <ul className="flex flex-col gap-3 mt-auto text-base">
              <li className="flex items-start gap-3"><span className="text-emerald-500">✓</span> <span>L'intention d'achat est maximale.</span></li>
              <li className="flex items-start gap-3"><span className="text-emerald-500">✓</span> <span>Un bon site travaille pour vous 24h/24.</span></li>
              <li className="flex items-start gap-3"><span className="text-emerald-500">✓</span> <span>Un article écrit aujourd'hui peut vous ramener des clients pendant 3 ans.</span></li>
            </ul>
          </div>
        </div>

        <div className="bg-yellow-400/5 border-2 border-dashed border-yellow-400/50 rounded-2xl p-8 text-center mt-12">
          <h3 className="text-xl font-extrabold text-yellow-400 mb-2">🤔 Réflexion collective</h3>
          <p className="text-lg text-white/90 mb-0">Levez la main : qui ici passe plus de 2 heures par semaine sur Instagram/Facebook pour son activité ? Et combien de vrais clients réguliers cela vous rapporte-t-il vraiment ?</p>
        </div>
      </div>
    </section>
  );
}

function Programme() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-bold tracking-wider uppercase mb-6 bg-blue-600/10 text-brand-primary">
            MÉTHODOLOGIE
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">Le Plan d'Action :<br />5 leviers simples.</h2>
          <p className="text-slate-600 mb-6 text-lg">Voyez Google comme un bibliothécaire très pointilleux. Votre mission n'est pas de le tromper, mais de lui prouver que <strong className="text-slate-900">votre entreprise est la meilleure réponse</strong> à la question posée par votre futur client.</p>
          <p className="text-slate-600 text-lg">Voici les 5 étapes pour le convaincre.</p>
        </div>

        <div className="flex flex-col gap-4">
          <div className="bg-white border border-slate-200 rounded-2xl p-4 md:p-6 flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center font-extrabold text-xl shrink-0 bg-blue-600/10 text-brand-primary">1</div>
              <h4 className="text-lg font-bold text-slate-900">La fiche Google Business Profile</h4>
            </div>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-4 md:p-6 flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center font-extrabold text-xl shrink-0 bg-emerald-500/10 text-emerald-500">2</div>
              <h4 className="text-lg font-bold text-slate-900">La création de contenu via l'I.A.</h4>
            </div>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-4 md:p-6 flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center font-extrabold text-xl shrink-0 bg-purple-500/10 text-purple-500">3</div>
              <h4 className="text-lg font-bold text-slate-900">La psychologie des Avis Google</h4>
            </div>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-4 md:p-6 flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center font-extrabold text-xl shrink-0 bg-red-500/10 text-red-500">4</div>
              <h4 className="text-lg font-bold text-slate-900">Le socle technique (Votre Site)</h4>
            </div>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-4 md:p-6 flex items-center justify-between shadow-sm border-l-4 border-l-yellow-400">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center font-extrabold text-xl shrink-0 bg-yellow-400/20 text-amber-600">5</div>
              <h4 className="text-lg font-bold text-slate-900">Convertir via l'Appel Découverte</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Levier1() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div>
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-bold tracking-wider uppercase mb-6 bg-blue-600/10 text-brand-primary">
            LEVIER 1
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">La Vitrine Locale :<br />Google Maps</h2>
          <p className="text-slate-600 mb-8 text-lg">Que vous soyez assureur, agence de services, ou créatrice... l'encart gratuit qui apparaît sur la carte Google est l'élément le plus cliqué au monde.</p>

          <div className="bg-brand-primary text-white rounded-2xl p-8 mb-8 text-center">
            <div className="text-5xl font-black leading-none mb-3">Le Top 3</div>
            <p className="text-white/90 font-medium text-lg">Google ne montre que les 3 meilleures fiches. Si vous n'êtes pas dedans, vous perdez 80% du trafic local.</p>
          </div>

          <div className="bg-red-500/5 border-2 border-dashed border-red-500 rounded-2xl p-6 md:p-8 relative">
            <div className="bg-red-500 text-white px-3 py-1.5 rounded-full text-xs font-extrabold tracking-widest inline-flex items-center gap-2 mb-4 animate-pulse-red">
              <span className="text-[10px]">🔴</span> AUDIT EN DIRECT
            </div>
            <h3 className="text-xl font-extrabold text-red-700 mb-2">Crash test de votre fiche</h3>
            <p className="text-red-800 mb-0">Qui veut qu'on regarde sa fiche ensemble tout de suite ? Je vais l'afficher sur mon téléphone et vous donner 2 conseils immédiats pour l'optimiser face à tous.</p>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
          <h3 className="text-xl font-extrabold text-slate-900 mb-6">Les règles pour y être :</h3>
          <ul className="flex flex-col gap-5">
            <li className="flex items-start gap-4 font-medium text-lg text-slate-700">
              <span className="text-emerald-500 text-2xl leading-none mt-1">✓</span>
              <span><strong className="text-slate-900">Le Nom Exact :</strong> Évitez le "bourrage" de mots-clés dans votre nom (Ex: "Assurance Dupont | Pas cher | Auto"), Google bloque les fiches frauduleuses.</span>
            </li>
            <li className="flex items-start gap-4 font-medium text-lg text-slate-700">
              <span className="text-emerald-500 text-2xl leading-none mt-1">✓</span>
              <span><strong className="text-slate-900">La Cohérence (NAP) :</strong> Votre Nom, Adresse et Téléphone doivent être identiques partout sur internet.</span>
            </li>
            <li className="flex items-start gap-4 font-medium text-lg text-slate-700">
              <span className="text-emerald-500 text-2xl leading-none mt-1">✓</span>
              <span><strong className="text-slate-900">L'Humain avant tout :</strong> Ajoutez des photos réelles (vous, vos créations de bijoux, vos locaux, vos tableaux). Fuyez les banques d'images.</span>
            </li>
            <li className="flex items-start gap-4 font-medium text-lg text-slate-700">
              <span className="text-emerald-500 text-2xl leading-none mt-1">✓</span>
              <span><strong className="text-slate-900">Une description orientée client :</strong> Utilisez les mots de vos clients (ex: "Appareils de soins anti-âge" et pas "Technologie dermique avancée").</span>
            </li>
            <li className="flex items-start gap-4 font-medium text-lg text-slate-700">
              <span className="text-emerald-500 text-2xl leading-none mt-1">✓</span>
              <span><strong className="text-slate-900">Les Avis Google :</strong> C'est le nerf de la guerre. La quantité, la note moyenne, mais surtout <strong className="text-brand-primary">vos réponses</strong> aux avis montrent que vous êtes actif et soucieux de vos clients.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function ModeExpert() {
  return (
    <section className="bg-brand-dark text-white py-20 relative overflow-hidden">
      <div className="absolute rounded-full z-0 pointer-events-none w-[600px] h-[600px] -top-[200px] -right-[200px] bg-[radial-gradient(circle,rgba(0,82,255,0.2)_0%,rgba(11,17,33,0)_70%)]"></div>
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-bold tracking-wider uppercase mb-6 bg-yellow-400 text-brand-dark">
            MODE EXPERT
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Optimiser sa Fiche Google de A à Z</h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">Avoir une fiche c'est la base. L'optimiser à 100% c'est ce qui vous fera passer devant vos concurrents. Voici ma méthode "secrète" en 4 étapes.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-brand-dark-card border border-yellow-400/30 rounded-2xl p-8">
            <h3 className="text-xl font-extrabold text-yellow-400 mb-4">1. La Catégorie "Cachée"</h3>
            <p className="text-slate-300 mb-0">Tout le monde met une catégorie principale. Mais Google permet d'ajouter jusqu'à <strong className="text-white">9 catégories secondaires</strong> ! <br /><br /><em className="text-slate-400">Exemple : "Agence de services à domicile" (Principale) + "Aide aux personnes âgées", "Service de ménage" (Secondaires).</em></p>
          </div>
          <div className="bg-brand-dark-card border border-yellow-400/30 rounded-2xl p-8">
            <h3 className="text-xl font-extrabold text-yellow-400 mb-4">2. La Description (Votre Pitch)</h3>
            <p className="text-slate-300 mb-0">Google vous offre 750 caractères. Rédigez un argumentaire complet. <br /><br /><em className="text-slate-400">Astuce : Les 250 premiers caractères sont cruciaux car ils s'affichent directement sur mobile sans avoir à cliquer sur "Lire la suite". Allez droit au but !</em></p>
          </div>
          <div className="bg-brand-dark-card border border-yellow-400/30 rounded-2xl p-8">
            <h3 className="text-xl font-extrabold text-yellow-400 mb-4">3. Les Photos "Géo-taguées"</h3>
            <p className="text-slate-300 mb-0">L'algorithme de Google lit les données de vos photos (métadonnées). Prenez vos photos avec votre smartphone depuis votre lieu d'activité (la position GPS y est intégrée). Google comprendra que vous êtes vraiment localisé là.</p>
          </div>
          <div className="bg-brand-dark-card border border-yellow-400/30 rounded-2xl p-8">
            <h3 className="text-xl font-extrabold text-yellow-400 mb-4">4. Les Posts (Le pouls de l'entreprise)</h3>
            <p className="text-slate-300 mb-0">Vous pouvez publier des "Posts" sur Google comme sur Instagram. Partagez une nouvelle création de tableau, une promo sur des cosmétiques, ou une actualité <strong className="text-white">1 fois par semaine</strong>. Cela montre à l'algorithme que vous êtes actif.</p>
          </div>
        </div>

        <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-8 mt-8 flex flex-col md:flex-row items-start gap-6">
          <div className="text-5xl">🤖</div>
          <div>
            <h3 className="text-xl font-bold text-emerald-400 mb-2">L'Astuce ChatGPT (Gain de temps : 2h/mois)</h3>
            <p className="text-slate-300 mb-3">Ne rédigez plus vos descriptions et vos posts vous-même. Utilisez ce prompt :</p>
            <code className="block bg-brand-dark p-4 rounded-lg text-emerald-300 text-sm font-mono">"Agis comme un expert en marketing local. Rédige un post Google Business de 100 mots pour annoncer [votre actualité/promo]. Le ton doit être professionnel mais chaleureux, et inciter à contacter le [votre numéro]."</code>
          </div>
        </div>
      </div>
    </section>
  );
}

function ErreurFicheAbandonnee() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="bg-red-500/5 border-2 border-dashed border-red-500 rounded-2xl p-10 relative">
          <div className="absolute -top-4 -left-4 text-6xl">🏚️</div>
          <h3 className="text-2xl font-extrabold text-red-700 mb-4">L'erreur de 90% des indépendants</h3>
          <p className="text-lg text-slate-800 mb-0">Créer sa fiche Google ou son site... et ne plus jamais y toucher pendant 2 ans.</p>
        </div>
        <div>
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-bold tracking-wider uppercase mb-6 bg-blue-600/10 text-brand-primary">
            L'ALGORITHME
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">Google est (presque) humain.</h2>
          <p className="text-slate-600 mb-6 text-lg">Il n'a aucune envie d'envoyer ses utilisateurs vers un magasin qui a l'air fermé ou abandonné. S'il voit que rien ne bouge, il vous déclasse.</p>
          <div className="bg-emerald-500/10 border-l-4 border-emerald-500 p-6 rounded-r-xl">
            <h4 className="text-lg font-bold text-emerald-700 mb-2">Le remède miracle (5 min/mois) :</h4>
            <ul className="flex flex-col gap-2 text-slate-700 font-medium">
              <li>✓ Mettre à jour ses horaires (surtout jours fériés)</li>
              <li>✓ Ajouter UNE nouvelle photo par mois</li>
              <li>✓ Répondre aux nouveaux avis</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function StrategieSEO() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div>
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-bold tracking-wider uppercase mb-6 bg-blue-600/10 text-brand-primary">
            STRATÉGIE SEO
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">La Règle d'Or :<br />Viser l'Océan Bleu</h2>
          <p className="text-slate-600 mb-6 text-lg">L'erreur classique est de vouloir être numéro 1 sur un mot court. C'est ce qu'on appelle "l'Océan Rouge", rempli de requins (les multinationales avec des budgets de millions d'euros).</p>
          <p className="text-slate-600 mb-6 text-lg">La solution ? <strong className="text-slate-900">La Longue Traîne.</strong> Des expressions de 3 ou 4 mots, très précises. Il y a moins de recherche mensuelle, mais <strong className="text-slate-900">100% de clients ultra-qualifiés et prêts à acheter</strong>.</p>
        </div>

        <div className="flex flex-col gap-6">
          <div className="bg-red-500/5 border border-red-100 rounded-2xl p-6 border-l-4 border-l-red-500">
            <h4 className="text-lg font-bold text-red-700 mb-2">❌ Impossible (Océan Rouge)</h4>
            <p className="text-slate-800 mb-0">"Assurance" <br /><span className="text-slate-500 italic">(Vous affrontez Axa, Allianz, etc.)</span><br /><br />"Tableau digital" <br /><span className="text-slate-500 italic">(Vous affrontez Amazon, Pinterest)</span></p>
          </div>

          <div className="bg-emerald-500/5 border border-emerald-100 rounded-2xl p-6 border-l-4 border-l-emerald-500">
            <h4 className="text-lg font-bold text-emerald-700 mb-2">✅ Le Jackpot (Océan Bleu)</h4>
            <p className="text-slate-800 mb-0">"Assurance décennale artisan artisanat [Ville]" <br /><span className="text-slate-500 italic">(Le client cherche un contrat IMMÉDIATEMENT)</span><br /><br />"Créatrice tableau digital personnalisé famille Paris" <br /><span className="text-slate-500 italic">(Achat d'impulsion quasi certain)</span></p>
          </div>
        </div>
      </div>
    </section>
  );
}

function LongueTraine() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-bold tracking-wider uppercase mb-6 bg-blue-600/10 text-brand-primary">
            STRATÉGIE AVANCÉE
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">La magie de la <span className="text-brand-primary">Longue Traîne</span></h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">Ne vous battez pas là où tout le monde se bat. Soyez malin.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-red-100">
            <div className="text-red-500 font-bold mb-2">Mot-clé Générique</div>
            <h3 className="text-xl font-black text-slate-900 mb-4">"Avocat"</h3>
            <ul className="text-slate-600 space-y-2 text-sm">
              <li>❌ 100 000 recherches/mois</li>
              <li>❌ Concurrence extrême</li>
              <li>❌ Intention floue (cherche-t-il un fruit ou un métier ?)</li>
              <li>❌ Conversion : 0.1%</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-orange-100">
            <div className="text-orange-500 font-bold mb-2">Mot-clé Spécifique</div>
            <h3 className="text-xl font-black text-slate-900 mb-4">"Avocat divorce"</h3>
            <ul className="text-slate-600 space-y-2 text-sm">
              <li>⚠️ 10 000 recherches/mois</li>
              <li>⚠️ Concurrence forte</li>
              <li>✅ Intention claire</li>
              <li>⚠️ Conversion : 1%</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md border-2 border-emerald-500 relative transform md:-translate-y-4">
            <div className="absolute -top-3 -right-3 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full">LE JACKPOT</div>
            <div className="text-emerald-600 font-bold mb-2">La Longue Traîne</div>
            <h3 className="text-xl font-black text-slate-900 mb-4">"Avocat divorce amiable garde alternée Lyon 3"</h3>
            <ul className="text-slate-600 space-y-2 text-sm">
              <li>✅ 50 recherches/mois</li>
              <li>✅ Concurrence très faible</li>
              <li>✅ Intention d'achat immédiate</li>
              <li>✅ Conversion : 25%</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-8 flex flex-col md:flex-row items-start gap-6 max-w-4xl mx-auto">
          <div className="text-5xl">🤖</div>
          <div>
            <h3 className="text-xl font-bold text-emerald-700 mb-2">L'Astuce ChatGPT : Trouver ses mots-clés</h3>
            <p className="text-slate-700 mb-3">En panne d'inspiration pour trouver votre "Océan Bleu" ? Demandez à l'I.A. :</p>
            <code className="block bg-white p-4 rounded-lg text-emerald-600 text-sm border border-emerald-200 font-mono">"Quelles sont les 10 questions les plus fréquentes que se posent les particuliers avant de faire appel à un [Votre Métier] à [Votre Ville] ? Formule-les comme des requêtes Google de longue traîne."</code>
          </div>
        </div>
      </div>
    </section>
  );
}

function SyndromeRestaurant() {
  return (
    <section className="bg-brand-dark text-white py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-bold tracking-wider uppercase mb-6 bg-yellow-400 text-brand-dark">
            STRUCTURE DU SITE
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Le syndrome du<br /><span className="text-yellow-400">"Restaurant à 50 plats"</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
          <div className="bg-slate-800 border border-white/10 rounded-2xl p-8 flex flex-col">
            <div className="text-4xl mb-4">🍕🍣🌮🥘</div>
            <h3 className="text-xl font-extrabold text-white mb-4">Le Concept</h3>
            <p className="text-slate-300 text-lg mb-0">Si vous allez dans un restaurant et que la carte propose des sushis, des pizzas, de la choucroute et des tacos... est-ce que ça vous donne confiance sur la qualité ? <strong className="text-red-400">La réponse est non.</strong></p>
          </div>

          <div className="bg-brand-primary/20 border border-brand-primary/50 rounded-2xl p-8 flex flex-col">
            <div className="text-4xl mb-4">🌐</div>
            <h3 className="text-xl font-extrabold text-white mb-4">L'Application SEO</h3>
            <p className="text-slate-300 text-lg mb-4">Sur internet, c'est pareil. L'erreur fatale est d'avoir une seule page "Mes Services" avec une liste à puces "fourre-tout".</p>
            <p className="text-white font-bold text-lg mb-0">Google déteste les pages fourre-tout. Il ne positionne que les experts d'un sujet précis.</p>
          </div>
        </div>

        <div className="bg-white text-brand-dark rounded-2xl p-8 mt-12 text-center max-w-3xl mx-auto shadow-xl">
          <h3 className="text-2xl font-black mb-4">Le Déclic</h3>
          <p className="text-xl font-medium text-slate-700 mb-0">"Pour que Google comprenne ce que je vends, je dois lui donner un menu clair et séparé."<br /><br /><span className="text-brand-primary font-bold">1 Page = 1 Expertise (ex: 1 page "Assurance Auto", 1 page "Assurance Décennale")</span></p>
        </div>
      </div>
    </section>
  );
}

function ContenuRoi() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-bold tracking-wider uppercase mb-6 bg-brand-primary/10 text-brand-primary">
            LE CONTENU
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">Que faut-il écrire sur ces pages ?</h2>
          <p className="text-lg text-slate-600 mb-6">Google est aveugle. Il ne voit pas les belles images, il lit du texte. Si votre page "Assurance Auto" ne contient que 3 lignes et un bouton de contact, Google considérera que vous n'êtes pas un expert.</p>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-brand-primary/10 text-brand-primary flex items-center justify-center font-bold shrink-0 mt-1">1</div>
              <div>
                <h4 className="font-bold text-slate-900">La règle des 500 mots</h4>
                <p className="text-slate-600 text-sm">C'est le minimum syndical pour que Google comprenne le sujet de votre page et vous prenne au sérieux.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-brand-primary/10 text-brand-primary flex items-center justify-center font-bold shrink-0 mt-1">2</div>
              <div>
                <h4 className="font-bold text-slate-900">Répondez aux questions (FAQ)</h4>
                <p className="text-slate-600 text-sm">Quelles sont les 5 questions que vos clients vous posent TOUJOURS au téléphone ? Écrivez-les sur votre site avec les réponses. Google adore ça.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-brand-primary/10 text-brand-primary flex items-center justify-center font-bold shrink-0 mt-1">3</div>
              <div>
                <h4 className="font-bold text-slate-900">Structurez avec des titres</h4>
                <p className="text-slate-600 text-sm">Utilisez des sous-titres clairs (H2, H3) pour aérer la lecture. Un gros bloc de texte fait fuir les internautes.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-emerald-50 p-8 rounded-2xl border border-emerald-200 shadow-sm relative">
          <div className="absolute -top-6 -right-6 text-6xl">🤖</div>
          <h3 className="text-xl font-bold text-emerald-800 mb-4">L'Assistant Rédacteur (ChatGPT)</h3>
          <p className="text-slate-600 mb-4">Ne partez jamais d'une page blanche. Donnez vos informations brutes à l'I.A. et laissez-la structurer la page :</p>
          <code className="block bg-white p-4 rounded-lg text-emerald-700 text-sm border border-emerald-200 font-mono mb-4">"Rédige une page web de 500 mots pour présenter mon service de [Service]. Inclus des titres H2, un paragraphe sur les avantages, et une FAQ de 3 questions. Voici mes infos : [Prix, spécificités...]"</code>
          <p className="text-emerald-800 font-medium text-sm">⚠️ Attention : Relisez et modifiez toujours le texte pour qu'il garde votre "patte" humaine !</p>
        </div>
      </div>
    </section>
  );
}

function Backlinks() {
  return (
    <section className="bg-brand-dark text-white py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-bold tracking-wider uppercase mb-6 bg-yellow-400/20 text-yellow-400">
          LA POPULARITÉ
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Le Bouche-à-Oreille Digital</h2>
        <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-12">En SEO, on appelle ça les <strong>Backlinks</strong> (liens entrants). C'est le 3ème pilier de l'algorithme de Google.</p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
          <div className="bg-slate-800 p-6 rounded-xl w-full md:w-1/3 border border-white/10">
            <div className="text-3xl mb-4">🏢</div>
            <h4 className="font-bold mb-2">Site A (Mairie)</h4>
            <p className="text-sm text-slate-400">Fait un lien vers votre site</p>
          </div>
          <div className="text-brand-primary text-4xl font-bold hidden md:block">→</div>
          <div className="text-brand-primary text-4xl font-bold md:hidden">↓</div>
          <div className="bg-brand-primary/20 border border-brand-primary p-6 rounded-xl w-full md:w-1/3">
            <div className="text-3xl mb-4">⭐</div>
            <h4 className="font-bold mb-2">Votre Site</h4>
            <p className="text-sm text-slate-300">Gagne en "Autorité"</p>
          </div>
        </div>

        <div className="bg-white/5 p-8 rounded-2xl text-left max-w-4xl mx-auto border border-white/10">
          <h3 className="text-2xl font-bold text-yellow-400 mb-4">Comment ça marche ?</h3>
          <p className="text-slate-300 mb-4">Pour Google, chaque lien qui pointe vers votre site est un <strong>vote de confiance</strong>. Plus le site qui fait le lien est important (une mairie, un journal local, la CCI), plus le vote a du poids.</p>
          <h4 className="font-bold text-white mt-6 mb-2">Actions faciles pour commencer :</h4>
          <ul className="list-disc list-inside text-slate-300 space-y-2">
            <li>S'inscrire sur les annuaires locaux et de votre chambre de commerce.</li>
            <li>Demander un lien à vos partenaires commerciaux ou fournisseurs.</li>
            <li>Sponsoriser une association locale (qui mettra votre logo avec un lien sur son site).</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function MobileFirst() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1 flex justify-center">
          <div className="w-64 h-[500px] bg-slate-900 rounded-[3rem] border-[8px] border-slate-800 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 inset-x-0 h-6 bg-slate-800 rounded-b-xl w-1/2 mx-auto"></div>
            <div className="p-4 pt-8 h-full flex flex-col gap-4 bg-white">
              <div className="w-full h-32 bg-slate-200 rounded-lg animate-pulse"></div>
              <div className="w-3/4 h-6 bg-slate-200 rounded animate-pulse"></div>
              <div className="w-full h-4 bg-slate-200 rounded animate-pulse"></div>
              <div className="w-full h-4 bg-slate-200 rounded animate-pulse"></div>
              <div className="w-5/6 h-4 bg-slate-200 rounded animate-pulse"></div>
              <div className="mt-auto w-full h-12 bg-brand-primary rounded-lg animate-pulse"></div>
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-bold tracking-wider uppercase mb-6 bg-purple-600/10 text-purple-600">
            RÈGLE ABSOLUE
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">Le Juge de Paix : <br/>Le Téléphone</h2>
          <p className="text-lg text-slate-600 mb-6">Aujourd'hui, <strong>plus de 60% du trafic web</strong> se fait sur smartphone. Pour certains métiers (serrurier, restaurant), c'est plus de 80%.</p>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 mb-6">
            <h3 className="font-bold text-slate-900 mb-2">L'Indexation "Mobile-First"</h3>
            <p className="text-slate-600 text-sm mb-0">Depuis quelques années, Google a changé ses règles. Il ne regarde plus la version ordinateur de votre site pour vous classer. <strong>Il regarde UNIQUEMENT la version mobile.</strong></p>
          </div>

          <ul className="space-y-3 text-slate-700 font-medium">
            <li className="flex items-center gap-2">❌ Texte trop petit pour être lu</li>
            <li className="flex items-center gap-2">❌ Boutons trop rapprochés (on clique à côté)</li>
            <li className="flex items-center gap-2">❌ Site qui déborde sur les côtés</li>
            <li className="flex items-center gap-2 font-bold text-red-500 mt-2">👉 Sanction immédiate de Google.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function Regle3Secondes() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div>
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-bold tracking-wider uppercase mb-6 bg-red-500/10 text-red-500">
            LEVIER 4
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">L'épreuve de vérité :<br />La règle des 3 secondes</h2>
          <p className="text-slate-600 mb-6 text-lg">Avoir des visites sur votre site, c'est bien. Mais sur internet, le client est impatient. S'il arrive sur votre site, il vous juge en <strong className="text-slate-900">exactement 3 secondes</strong>.</p>
          <p className="text-slate-600 mb-6 text-lg">S'il y a trop de texte, si c'est mal affiché sur son téléphone, ou s'il ne comprend pas immédiatement ce que vous vendez : <span className="text-red-500 font-bold">il ferme la page et part chez votre concurrent.</span></p>

          <div className="bg-red-500/5 border border-red-100 rounded-2xl p-6 border-l-4 border-l-red-500 mb-6">
            <h3 className="text-xl font-bold text-red-700 mb-3">🛠️ L'importance du design</h3>
            <p className="text-slate-800 mb-0 text-lg">Un site fait "soi-même" sur une plateforme gratuite fait souvent amateur et ne rassure pas. Un site conçu de manière professionnelle s'affiche instantanément, et crie "<strong className="text-slate-900">Faites-moi confiance, je suis un expert !</strong>" dès la première seconde.</p>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div className="bg-brand-dark text-white rounded-2xl p-10">
            <h3 className="text-2xl font-extrabold text-yellow-400 mb-6">Ce qui doit être visible en 3 secondes :</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-4 text-lg">
                <span className="text-2xl leading-none">🎯</span>
                <span><strong className="text-white">Une promesse claire :</strong> "Je fais X pour Y à [Ville]".</span>
              </li>
              <li className="flex items-start gap-4 text-lg">
                <span className="text-2xl leading-none">🤝</span>
                <span><strong className="text-white">De la réassurance :</strong> "Plus de 100 clients satisfaits", ou "Agréé État".</span>
              </li>
              <li className="flex items-start gap-4 text-lg">
                <span className="text-2xl leading-none">👆</span>
                <span><strong className="text-white">Un bouton d'action évident :</strong> On ne doit pas chercher comment vous contacter.</span>
              </li>
              <li className="flex items-start gap-4 text-lg">
                <span className="text-2xl leading-none">✉️</span>
                <span><strong className="text-white">Une adresse pro :</strong> "contact@mon-entreprise.com" (et pas un @gmail.com qui fait amateur).</span>
              </li>
            </ul>
          </div>

          <div className="bg-red-500/5 border-2 border-dashed border-red-500 rounded-2xl p-8 relative">
            <div className="bg-red-500 text-white px-3 py-1.5 rounded-full text-xs font-extrabold tracking-widest inline-flex items-center gap-2 mb-4 animate-pulse-red">
              <span className="text-[10px]">🔴</span> LE TEST DU SMARTPHONE
            </div>
            <h3 className="text-xl font-extrabold text-red-700 mb-2">Passez-vous le test ?</h3>
            <p className="text-red-800 mb-0 text-lg">Ouvrez votre propre site sur votre téléphone. Soyez honnête : est-ce que ça fait "Wahou", ou est-ce que ça fait "Bricolage" ? Sur internet, un cerveau confus dit toujours "Non".</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ConversionDesign() {
  return (
    <section className="bg-brand-dark text-white py-20 relative overflow-hidden">
      <div className="absolute rounded-full z-0 pointer-events-none w-[600px] h-[600px] -top-[200px] -right-[200px] bg-[radial-gradient(circle,rgba(0,82,255,0.2)_0%,rgba(11,17,33,0)_70%)]"></div>
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        <div>
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-bold tracking-wider uppercase mb-6 bg-white/10 text-white border border-white/20">
            CONVERSION & DESIGN
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Avoir des visites, c'est bien.<br /><span className="text-brand-primary">Avoir des clients, c'est mieux.</span></h2>
          <p className="text-lg text-slate-300 mb-6">Un site rapide pour Google, c'est une chose. Mais une fois que le client arrive sur votre site, <strong className="text-white">il doit être convaincu en moins de 5 secondes</strong> de rester.</p>
          <p className="text-lg text-slate-300 mb-6">C'est la différence entre un site gratuit "fait maison" (qui fait fuir l'utilisateur) et <strong className="text-white">un site premium bien pensé</strong> (qui agit comme votre meilleur commercial 24h/24, même quand vous dormez).</p>
        </div>

        <div className="bg-slate-800 border border-white/10 rounded-2xl overflow-hidden relative">
          <div className="bg-slate-900 p-3 text-center text-sm text-slate-400 border-b border-white/5">
            Anatomie du Site Web Parfait
          </div>
          <div className="p-6 md:p-10">
            <div className="border-2 border-dashed border-brand-primary p-6 pt-8 rounded-xl mb-6 relative">
              <div className="absolute -top-3 left-4 bg-slate-800 text-brand-primary text-xs font-bold px-2">1. La Promesse Claire (H1)</div>
              <h4 className="text-xl text-white font-bold mb-2">"Je fais [Résultat] pour [Client idéal] à [Ville]."</h4>
              <p className="text-sm text-slate-400 m-0">Ex: "Des soins cosmétiques anti-âge sur-mesure pour retrouver l'éclat de votre peau."</p>
            </div>

            <div className="border-2 border-dashed border-yellow-400 p-6 pt-8 rounded-xl mb-6 relative">
              <div className="absolute -top-3 left-4 bg-slate-800 text-yellow-400 text-xs font-bold px-2">2. La Preuve Sociale (Rassurance)</div>
              <p className="text-base text-white m-0">⭐⭐⭐⭐⭐ "Un accompagnement exceptionnel, mon problème a été réglé en 24h !" - Sophie T.</p>
            </div>

            <div className="border-2 border-dashed border-emerald-500 p-6 pt-8 rounded-xl relative text-center">
              <div className="absolute -top-3 left-4 bg-slate-800 text-emerald-500 text-xs font-bold px-2">3. L'Appel à l'action (Bouton clair)</div>
              <div className="bg-emerald-500 text-white px-6 py-3 rounded-full inline-block font-bold text-sm shadow-[0_4px_15px_rgba(16,185,129,0.3)]">Prendre un Rendez-vous gratuit ➔</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Levier3() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div>
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-bold tracking-wider uppercase mb-6 bg-purple-500/10 text-purple-600">
            LEVIER 3
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">La Psychologie des Avis</h2>
          <p className="text-slate-600 mb-8 text-lg">Avant de vous faire confiance pour leur assurance ou leur ménage, 9 personnes sur 10 lisent vos avis. Et surtout... <strong className="text-slate-900">Google lit le texte des avis</strong> pour comprendre ce que vous faites vraiment.</p>

          <div className="bg-brand-dark text-white p-8 rounded-2xl border-l-8 border-l-purple-500">
            <p className="text-lg font-bold text-purple-400 mb-3">Le message type à copier-coller :</p>
            <p className="text-base italic leading-relaxed text-white/90">
              « Bonjour ! Si vous avez apprécié notre échange, un petit avis Google m'aiderait énormément à me faire connaître localement. Vous pouvez simplement mentionner ce qu'on a fait (ex: l'achat de vos cosmétiques, ou votre nouveau contrat d'assurance). Ça prend 2 minutes via ce lien : [Lien]. Merci beaucoup ! »
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="bg-purple-500/5 border-2 border-dashed border-purple-500 rounded-2xl p-6 md:p-8 relative">
            <div className="bg-purple-500 text-white px-3 py-1.5 rounded-full text-xs font-extrabold tracking-widest inline-flex items-center gap-2 mb-4">
              <span className="text-[10px]">🔴</span> LE DÉFI DU SOIR
            </div>
            <h3 className="text-xl font-extrabold text-purple-700 mb-2">2 minutes chrono</h3>
            <p className="text-slate-800 mb-0">Pensez à UN client satisfait cette semaine. Prenez votre téléphone maintenant, et envoyez-lui ce SMS adapté. Vous aurez un avis 5 étoiles d'ici ce soir.</p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 flex items-start gap-5 shadow-sm">
            <div className="bg-purple-500/10 text-purple-600 w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0">⏱️</div>
            <div>
              <h4 className="text-lg font-bold text-slate-900 mb-1">Le bon timing</h4>
              <p className="text-slate-600 text-sm">Demandez <strong className="text-slate-900">à l'instant précis</strong> du "merci". Pas 3 semaines plus tard par email.</p>
            </div>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-6 flex items-start gap-5 shadow-sm">
            <div className="bg-purple-500/10 text-purple-600 w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0">📱</div>
            <div>
              <h4 className="text-lg font-bold text-slate-900 mb-1">Le bon format</h4>
              <p className="text-slate-600 text-sm">Envoyez le lien directement par <strong className="text-slate-900">SMS ou WhatsApp</strong>.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function GestionMauvaisAvis() {
  return (
    <section className="bg-white py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-bold tracking-wider uppercase mb-6 bg-red-500/10 text-red-600 border border-red-500/20">
            GESTION DE CRISE
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">Comment gérer un <span className="text-red-500">mauvais avis</span> ?</h2>
          <p className="text-lg text-slate-600 mb-6">Ça arrive même aux meilleurs. Un client mécontent, ou pire, un faux avis d'un concurrent. La pire erreur ? L'ignorer ou s'énerver.</p>
          
          <div className="bg-slate-50 border-l-4 border-brand-primary p-6 rounded-r-xl mt-8">
            <h3 className="text-xl font-bold text-slate-900 mb-2">La règle d'or :</h3>
            <p className="text-lg text-brand-primary font-bold mb-0">Votre réponse n'est pas pour la personne qui a laissé l'avis.</p>
            <p className="text-slate-600 mt-2">Elle est pour les <strong className="text-slate-900">100 prochains clients</strong> qui vont vous lire. C'est votre chance de montrer votre professionnalisme, votre calme et votre sens du service client.</p>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center text-xl">😡</div>
              <div>
                <div className="font-bold text-slate-900">Client Mécontent</div>
                <div className="text-yellow-400 text-xs">⭐ (1/5)</div>
              </div>
            </div>
            <p className="text-slate-600 text-sm italic">"Service catastrophique, personne ne m'a rappelé, à fuir !!!"</p>
          </div>

          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 ml-8 relative">
            <div className="absolute -left-4 top-1/2 -translate-y-1/2 text-2xl">↪️</div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-brand-primary rounded-full flex items-center justify-center text-xl text-white">🏢</div>
              <div>
                <div className="font-bold text-slate-900">Votre Réponse (Parfaite)</div>
                <div className="text-brand-primary text-xs font-bold">Propriétaire</div>
              </div>
            </div>
            <p className="text-slate-700 text-sm">"Bonjour, nous sommes navrés d'apprendre votre insatisfaction. La qualité de notre suivi est notre priorité. Nous n'arrivons pas à retrouver votre dossier avec ce pseudonyme. Pouvez-vous nous contacter au 01 XX XX XX XX pour que nous puissions résoudre ce problème immédiatement ? Bien cordialement."</p>
          </div>

          <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-6 flex items-start gap-4 mt-2">
            <div className="text-3xl">🤖</div>
            <div>
              <h4 className="font-bold text-emerald-800 mb-1">L'Astuce Anti-Stress (ChatGPT)</h4>
              <p className="text-slate-700 text-sm mb-2">Sous le coup de l'émotion, on répond souvent mal. Laissez l'I.A. prendre le relais :</p>
              <code className="block bg-white p-3 rounded-lg text-emerald-700 text-xs border border-emerald-200 font-mono">"Rédige une réponse très professionnelle, polie et apaisée à cet avis client négatif. Le but est de montrer aux futurs lecteurs que nous sommes à l'écoute. Voici l'avis : [Coller l'avis]"</code>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Levier5() {
  return (
    <section className="bg-brand-dark text-white py-20 relative overflow-hidden">
      <div className="absolute rounded-full z-0 pointer-events-none w-[600px] h-[600px] -top-[200px] -right-[200px] bg-[radial-gradient(circle,rgba(0,82,255,0.2)_0%,rgba(11,17,33,0)_70%)]"></div>
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="bg-brand-dark-card border border-yellow-400/30 rounded-2xl text-center p-12">
          <div className="text-6xl mb-6">📅</div>
          <h3 className="text-3xl font-extrabold text-yellow-400 mb-6">Calendly</h3>
          <p className="text-lg text-slate-300">L'outil gratuit qui se lie à votre agenda. Le client clique sur votre site et choisit son heure. Zéro échange d'email.</p>
        </div>

        <div>
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-bold tracking-wider uppercase mb-6 bg-yellow-400/20 text-amber-500">
            LEVIER 5
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Convertir via l'Appel Découverte</h2>
          <p className="text-lg text-slate-300 mb-8">Vendre des assurances ou de l'aide à domicile demande de la confiance. Mettez un gros bouton "Réserver un appel gratuit de 15 min" sur votre site.</p>
          <ul className="flex flex-col gap-5">
            <li className="flex items-start gap-4 font-medium text-lg text-white">
              <span className="text-yellow-400 text-2xl leading-none mt-1">✓</span>
              <span>Fini la perte de temps au téléphone pour prendre RDV.</span>
            </li>
            <li className="flex items-start gap-4 font-medium text-lg text-white">
              <span className="text-yellow-400 text-2xl leading-none mt-1">✓</span>
              <span>Vous levez les derniers freins d'un client hésitant de vive voix.</span>
            </li>
            <li className="flex items-start gap-4 font-medium text-lg text-white">
              <span className="text-yellow-400 text-2xl leading-none mt-1">✓</span>
              <span>C'est très professionnel et ça rassure énormément avant un achat.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function CasConcret() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-bold tracking-wider uppercase mb-6 bg-blue-600/10 text-brand-primary border border-blue-600/20">
            LA PREUVE PAR L'IMAGE
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Ce que ça donne en vrai 📈</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">Pas de blabla, voici les résultats réels obtenus récemment en appliquant exactement les méthodes que nous venons de voir.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Cas 1 */}
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200 flex flex-col">
            <h3 className="text-2xl font-bold text-slate-900 mb-1">🧠 Psychologue</h3>
            <p className="text-slate-500 text-sm mb-6">Trafic généré via le site web (Google Search Console)</p>
            
            <div className="flex-grow flex items-center justify-center bg-slate-50 rounded-2xl mb-6 overflow-hidden border border-slate-100">
              <img src="https://i.postimg.cc/s2TsSFgy/Whats-App-Image-2026-03-20-at-22-37-59.jpg" alt="Stats Psychologue" className="w-full h-auto object-cover" />
            </div>
            
            <div className="flex gap-3 mt-auto">
              <span className="bg-blue-50 text-blue-700 px-4 py-2 rounded-xl font-bold text-sm">52 Clics qualifiés</span>
              <span className="bg-emerald-50 text-emerald-700 px-4 py-2 rounded-xl font-bold text-sm">Position moyenne : 6.7</span>
            </div>
          </div>

          {/* Cas 2 */}
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200 flex flex-col">
            <h3 className="text-2xl font-bold text-slate-900 mb-1">💬 Thérapeute de couple</h3>
            <p className="text-slate-500 text-sm mb-6">Combinaison Fiche Google + Site Web</p>
            
            <div className="flex-grow flex flex-col gap-4 mb-6">
              <div className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-100">
                <img src="https://i.postimg.cc/59RyTz1S/Capture-d-ecran-2026-03-20-223005.png" alt="Stats Fiche Google" className="w-full h-auto object-cover" />
              </div>
              <div className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-100">
                <img src="https://i.postimg.cc/pTVybYp5/Capture-d-ecran-2026-03-20-224342.png" alt="Stats Site Web" className="w-full h-auto object-cover" />
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3 mt-auto">
              <span className="bg-brand-light text-brand-dark px-4 py-2 rounded-xl font-bold text-sm">502 Interactions Fiche</span>
              <span className="bg-blue-50 text-blue-700 px-4 py-2 rounded-xl font-bold text-sm">195 Clics Site Web</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function QuestionsReponses() {
  return (
    <section className="bg-brand-dark text-white py-20 relative overflow-hidden">
      <div className="absolute rounded-full z-0 pointer-events-none w-[600px] h-[600px] -top-[200px] -right-[200px] bg-[radial-gradient(circle,rgba(0,82,255,0.2)_0%,rgba(11,17,33,0)_70%)]"></div>
      <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
        <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-bold tracking-wider uppercase mb-6 bg-blue-600/20 text-brand-primary">
          ÉCHANGEONS
        </div>
        <h2 className="text-4xl md:text-6xl font-extrabold mb-8">C'est à vous !</h2>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-12">
          Vous avez des questions sur votre site actuel ? Sur votre fiche Google ? Ou sur une stratégie spécifique à votre métier ?
        </p>
        <div className="text-8xl animate-bounce">
          🙋‍♀️🙋‍♂️
        </div>
      </div>
    </section>
  );
}

function Conclusion() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Passez à l'action <span className="text-brand-primary">ce soir.</span></h2>
          <p className="text-xl text-slate-600 mb-10">L'erreur classique est de vouloir tout faire d'un coup. Choisissez <strong className="text-slate-900">une seule action</strong> ce soir et appliquez-la.</p>
          
          <div className="bg-brand-dark rounded-2xl p-10 text-center">
            <div className="text-5xl mb-4">💬</div>
            <h3 className="text-3xl font-extrabold text-white mb-4">Des questions ?</h3>
            <p className="text-white/90 font-medium text-lg">C'est le moment d'échanger sur votre situation.</p>
          </div>
        </div>
        
        <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
          <h3 className="text-xl font-extrabold text-slate-900 mb-6 pb-4 border-b border-slate-200">Votre To-Do List :</h3>
          
          <div className="flex flex-col gap-5">
            <div className="flex gap-4 items-center">
              <div className="bg-blue-600/10 text-brand-primary w-10 h-10 rounded-xl flex items-center justify-center font-bold shrink-0">1</div>
              <p className="text-base font-bold text-slate-900 m-0">Vérifier/Créer sa fiche Google Business</p>
            </div>
            <div className="flex gap-4 items-center">
              <div className="bg-emerald-500/10 text-emerald-500 w-10 h-10 rounded-xl flex items-center justify-center font-bold shrink-0">2</div>
              <p className="text-base font-bold text-slate-900 m-0">Créer un compte ChatGPT et essayer le prompt</p>
            </div>
            <div className="flex gap-4 items-center">
              <div className="bg-purple-500/10 text-purple-500 w-10 h-10 rounded-xl flex items-center justify-center font-bold shrink-0">3</div>
              <p className="text-base font-bold text-slate-900 m-0">Envoyer un SMS d'avis à un client récent</p>
            </div>
            <div className="flex gap-4 items-center">
              <div className="bg-red-500/10 text-red-500 w-10 h-10 rounded-xl flex items-center justify-center font-bold shrink-0">4</div>
              <p className="text-base font-bold text-red-600 m-0">Venir me parler si votre site est trop vieux ou invisible 😉</p>
            </div>
            <div className="flex gap-4 items-center">
              <div className="bg-yellow-400/20 text-amber-600 w-10 h-10 rounded-xl flex items-center justify-center font-bold shrink-0">5</div>
              <p className="text-base font-bold text-slate-900 m-0">Créer un compte Calendly gratuit</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-brand-dark pt-10 pb-16 text-center border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-2xl font-extrabold text-white mb-4">
          <span className="text-brand-primary">🛡️</span> Triva Media
        </div>
        <p className="text-slate-400 text-sm mb-8">Atelier SEO animé par Aaron Boukaia.</p>
        <a href="https://triva-media.com" target="_blank" rel="noopener noreferrer" className="inline-block bg-brand-primary text-white px-8 py-4 rounded-full font-bold text-base shadow-[0_4px_15px_rgba(0,82,255,0.3)] hover:bg-blue-700 transition-colors">
          Visiter mon site : triva-media.com
        </a>
      </div>
    </footer>
  );
}

function AtelierMotsCles() {
  return (
    <section className="py-20 bg-brand-primary text-white relative overflow-hidden">
      <div className="absolute rounded-full z-0 pointer-events-none w-[400px] h-[400px] -bottom-[100px] -left-[100px] bg-[radial-gradient(circle,rgba(255,255,255,0.15)_0%,rgba(255,255,255,0)_70%)]"></div>
      <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
        <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-bold tracking-wider uppercase mb-6 bg-white/20 text-white border border-white/30">
          ATELIER PRATIQUE
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Trouvons votre "Mot-Clé en Or" 🥇</h2>
        <p className="text-xl text-white/90 max-w-2xl mx-auto mb-12">
          Ouvrez l'application Notes de votre téléphone. Nous allons définir ensemble la requête exacte que votre client idéal tape sur Google.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20">
            <h3 className="text-2xl font-bold mb-4 text-yellow-400">Étape 1 : L'intention</h3>
            <p className="mb-4">Ne choisissez pas un mot trop vague. Choisissez un mot qui prouve que la personne veut acheter.</p>
            <ul className="space-y-2 text-white/80">
              <li>❌ "Mal de dos" (Cherche juste une info)</li>
              <li>✅ "Ostéopathe urgence Paris 15" (Veut un RDV maintenant)</li>
            </ul>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20">
            <h3 className="text-2xl font-bold mb-4 text-yellow-400">Étape 2 : À vous de jouer</h3>
            <p className="mb-4">Tapez 3 mots-clés dans vos notes. Je vais passer vous voir un par un pour valider votre choix.</p>
            <div className="bg-black/20 p-4 rounded-xl font-mono text-sm">
              [Votre Métier] + [Votre Spécialité] + [Votre Ville/Quartier]
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AuditSiteDirect() {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-gradient-to-r from-red-600 to-red-800 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 text-9xl opacity-10 transform translate-x-8 -translate-y-8">
            📱
          </div>
          <div className="relative z-10 md:w-2/3">
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-bold tracking-wider uppercase mb-6 bg-white/20 text-white">
              SÉQUENCE VÉRITÉ
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Audit de vos sites en direct</h2>
            <p className="text-xl text-white/90 mb-8">
              La théorie c'est bien, la pratique c'est mieux. Nous allons prendre le temps de regarder les sites de chacun d'entre vous. <strong className="text-white">Ouvrez-les tous sur votre téléphone</strong> et analysons-les ensemble :
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <span className="bg-white/20 w-8 h-8 rounded-full flex items-center justify-center font-bold">1</span>
                <span>Passe-t-il le test des 3 secondes ?</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="bg-white/20 w-8 h-8 rounded-full flex items-center justify-center font-bold">2</span>
                <span>Est-il vraiment lisible sur votre écran mobile ?</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="bg-white/20 w-8 h-8 rounded-full flex items-center justify-center font-bold">3</span>
                <span>L'appel à l'action est-il clair ?</span>
              </li>
            </ul>
            <p className="text-yellow-400 font-bold italic">Promis, on sera bienveillants !</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Sommaire() {
  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-bold tracking-wider uppercase mb-6 bg-blue-600/10 text-brand-primary">
            AU PROGRAMME
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">Ce que nous allons voir aujourd'hui</h2>
        </div>
        
        <div className="grid gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-center gap-6 hover:shadow-md transition-shadow">
            <div className="text-4xl shrink-0">👋</div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-1">1. Introduction</h3>
              <p className="text-slate-600">Tour de table, idées reçues et la différence entre Réseaux Sociaux et Google.</p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-center gap-6 hover:shadow-md transition-shadow">
            <div className="text-4xl shrink-0">🎯</div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-1">2. Les bases du SEO Local</h3>
              <p className="text-slate-600">Comprendre ce que veut Google et comment se positionner dans sa ville.</p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-center gap-6 hover:shadow-md transition-shadow">
            <div className="text-4xl shrink-0">🚀</div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-1">3. Le Plan d'Action (5 Leviers)</h3>
              <p className="text-slate-600">Fiche Google, Contenu IA, Avis clients, Mobile-First et Conversion.</p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-center gap-6 hover:shadow-md transition-shadow">
            <div className="text-4xl shrink-0">🛠️</div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-1">4. Ateliers Pratiques & Audits</h3>
              <p className="text-slate-600">Trouver vos mots-clés et analyser vos sites en direct tous ensemble.</p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-center gap-6 hover:shadow-md transition-shadow">
            <div className="text-4xl shrink-0">❓</div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-1">5. Questions & Réponses</h3>
              <p className="text-slate-600">Un temps d'échange pour répondre à toutes vos interrogations.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <ProgressBar />
      <Hero />
      <Sommaire />
      <TourDeTable />
      <InstagramVsGoogle />
      <IdeesRecues />
      <DefinitionSEO />
      <CeQueVeutGoogle />
      <SEOLocal />
      <Programme />
      <Levier1 />
      <ModeExpert />
      <ErreurFicheAbandonnee />
      <StrategieSEO />
      <LongueTraine />
      <SyndromeRestaurant />
      <ContenuRoi />
      <AtelierMotsCles />
      <Backlinks />
      <Levier3 />
      <GestionMauvaisAvis />
      <MobileFirst />
      <Regle3Secondes />
      <ConversionDesign />
      <Levier5 />
      <CasConcret />
      <AuditSiteDirect />
      <QuestionsReponses />
      <Conclusion />
      <Footer />
    </div>
  );
}
