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
            VOTRE INTERVENANT
          </div>
          <h3 className="text-3xl font-extrabold mb-2">Aaron Boukaia</h3>
          <p className="text-brand-primary font-bold mb-6">Fondateur de Triva Media</p>
          <p className="text-slate-300 mb-6">
            Mon métier ? Créer des sites web sur-mesure et optimiser la visibilité locale des indépendants pour qu'ils deviennent incontournables sur leur secteur.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/10">
            <div>
              <div className="text-2xl font-black text-yellow-400">17 ans</div>
              <p className="text-xs text-slate-400 mt-1">Entrepreneur depuis mes 13 ans</p>
            </div>
            <div>
              <div className="text-2xl font-black text-brand-primary">3 ans</div>
              <p className="text-xs text-slate-400 mt-1">D'expertise SEO terrain</p>
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
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">3 idées reçues à oublier ce soir.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
        </div>
      </div>
    </section>
  );
}

function TourDeTable() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
            La question à un million :
          </h2>
          <p className="text-lg text-slate-600 mb-4">Quand vous avez cherché votre activité tout à l'heure, étiez-vous satisfaits de la position de votre entreprise dans les résultats ?</p>
          <p className="text-lg text-slate-600">C'est exactement ce que nous allons corriger ensemble.</p>
        </div>

        <div className="bg-gradient-to-br from-brand-dark to-brand-dark-card rounded-2xl p-8 md:p-12 text-white border border-slate-800">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-extrabold text-yellow-400">Faisons connaissance (Tour de table)</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/5 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">👋</div>
              <h4 className="text-lg font-bold">Votre prénom & activité</h4>
            </div>
            <div className="bg-white/5 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">🔍</div>
              <h4 className="text-lg font-bold">Avez-vous un site web ?</h4>
            </div>
            <div className="bg-white/5 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h4 className="text-lg font-bold">Votre objectif ce soir</h4>
            </div>
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
            <h3 className="text-xl font-bold text-red-700 mb-3">🛠️ Pourquoi Triva Media ?</h3>
            <p className="text-slate-800 mb-0 text-lg">Un site fait "soi-même" sur Wix fait souvent amateur et ne rassure pas. Mon métier, c'est de concevoir des sites web au design premium, qui s'affichent instantanément, et qui crient "<strong className="text-slate-900">Faites-moi confiance, je suis un professionnel !</strong>" dès la première seconde.</p>
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
          <p className="text-lg text-slate-300 mb-6">C'est la différence entre un site gratuit "fait maison" (qui fait fuir l'utilisateur) et <strong className="text-white">un site premium Triva Media</strong> (qui agit comme votre meilleur commercial 24h/24, même quand vous dormez).</p>
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
            CAS CONCRET RÉEL
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">Thérapeute de couple — Paris</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-8 flex flex-col items-start">
            <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase mb-4">AVANT</span>
            <h4 className="text-2xl font-bold text-red-400">Activité qui démarre. Zéro client. Zéro visibilité.</h4>
          </div>
          
          <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-8 flex flex-col items-start">
            <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase mb-4">APRÈS (3 MOIS)</span>
            <h4 className="text-2xl font-bold text-emerald-400">Première page Google. Clients réguliers.</h4>
          </div>
        </div>

        <div className="bg-gradient-to-br from-brand-primary to-blue-800 rounded-3xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-white shadow-xl text-center">
          <div>
            <div className="text-5xl md:text-6xl font-black mb-2 leading-none">+8 400</div>
            <div className="text-sm font-bold uppercase tracking-widest text-white/90">Impressions</div>
          </div>
          <div className="md:border-l md:border-r border-white/20">
            <div className="text-5xl md:text-6xl font-black mb-2 leading-none">502</div>
            <div className="text-sm font-bold uppercase tracking-widest text-white/90">Interactions Fiche</div>
          </div>
          <div>
            <div className="text-5xl md:text-6xl font-black mb-2 leading-none">Top 10</div>
            <div className="text-sm font-bold uppercase tracking-widest text-white/90">Position Moyenne</div>
          </div>
        </div>

        <div className="bg-blue-600/5 border-2 border-dashed border-brand-primary rounded-2xl p-8 mt-12 text-center max-w-3xl mx-auto">
          <h3 className="text-xl font-extrabold text-brand-primary mb-2">🎤 Témoignage</h3>
          <p className="text-lg text-slate-800 mb-0">Notre invitée est dans la salle ce soir pour vous partager son expérience !</p>
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

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <ProgressBar />
      <Hero />
      <IdeesRecues />
      <TourDeTable />
      <InstagramVsGoogle />
      <Programme />
      <Levier1 />
      <ModeExpert />
      <StrategieSEO />
      <Regle3Secondes />
      <ConversionDesign />
      <Levier3 />
      <Levier5 />
      <CasConcret />
      <Conclusion />
      <Footer />
    </div>
  );
}
