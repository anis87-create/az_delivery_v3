# 🍔 AZ Food Delivery App

Une application moderne de livraison de nourriture développée avec React et Redux Toolkit, offrant une expérience utilisateur fluide pour commander de la nourriture en ligne.

## 🌟 Fonctionnalités

### 🛒 Gestion du Panier
- **Ajout d'articles** : Ajoutez facilement des plats à votre panier
- **Contrôle des quantités** : Augmentez/diminuez les quantités avec des boutons intuitifs
- **Suppression d'articles** : Retirez des articles individuels ou videz complètement le panier
- **Calcul automatique** : Prix total calculé automatiquement avec taxes et frais de livraison
- **Persistance** : Le panier est sauvegardé dans localStorage

### 💰 Système de Prix
- **Conversion de devise** : Support USD vers TND (Dinar Tunisien)
- **Frais de livraison** : Frais fixes de livraison appliqués
- **Taxes** : Calcul automatique des taxes
- **Sous-total** : Affichage clair du sous-total avant frais

### 🎨 Interface Utilisateur
- **Design réactif** : Compatible mobile et desktop
- **Interface moderne** : Design épuré avec Tailwind CSS
- **Animations fluides** : Transitions CSS pour une expérience agréable
- **État vide** : Page d'état vide élégante quand le panier est vide

## 🚀 Installation

### Prérequis
- Node.js (version 14 ou supérieure)
- npm ou yarn

### Étapes d'installation

1. **Cloner le repository**
   ```bash
   git clone https://github.com/votre-username/az_food_delivery_app.git
   cd az_food_delivery_app
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Lancer l'application en mode développement**
   ```bash
   npm start
   # ou
   yarn start
   ```

4. **Ouvrir dans le navigateur**
   L'application sera disponible sur [http://localhost:3000](http://localhost:3000)

## 🏗️ Architecture du Projet

```
src/
├── components/
│   └── layout/
│       └── RestaurantDetailCartItem/
│           ├── index.jsx                    # Composant d'article du panier
│           └── RestaurantDetailCartItem.test.jsx
├── pages/
│   └── Cart/
│       ├── index.jsx                       # Page du panier
│       └── Cart.test.jsx
├── store/
│   └── features/
│       ├── cartSlice.js                    # Redux slice pour le panier
│       └── cartSlice.test.js
├── utils/
│   ├── helpers.js                          # Fonctions utilitaires
│   └── constantes.js                       # Constantes de l'application
└── data/
    └── restaurants.js                      # Données des restaurants
```

## 🛠️ Technologies Utilisées

### Frontend
- **React 19.1.1** : Bibliothèque JavaScript pour l'interface utilisateur
- **React Router 7.8.2** : Navigation côté client
- **Tailwind CSS 3.4.17** : Framework CSS utilitaire

### Gestion d'État
- **Redux Toolkit 2.9.0** : Gestion d'état moderne et efficace
- **React Redux 9.2.0** : Intégration React-Redux

### Interface Utilisateur
- **React Icons 5.5.0** : Bibliothèque d'icônes
- **SweetAlert2 11.23.0** : Modales et alertes élégantes

### Tests
- **Testing Library** : Suite complète de tests
  - @testing-library/react 16.3.0
  - @testing-library/jest-dom 6.8.0
  - @testing-library/user-event 13.5.0

### Outils de Développement
- **React Scripts 5.0.1** : Outils de build et développement
- **PostCSS 8.5.6** : Traitement CSS
- **Autoprefixer 10.4.21** : Préfixes CSS automatiques

## 🧪 Tests

Le projet inclut une suite complète de tests unitaires pour assurer la qualité du code.

### Lancer les tests
```bash
npm test
# ou
yarn test
```

### Couverture des tests
- **cartSlice.test.js** : Tests pour la logique Redux
- **Cart.test.jsx** : Tests pour le composant page panier
- **RestaurantDetailCartItem.test.jsx** : Tests pour le composant article

### Types de tests inclus
- Tests des actions Redux
- Tests des reducers
- Tests de rendu des composants
- Tests d'interaction utilisateur
- Tests de gestion d'état
- Tests de persistance localStorage

## 📱 Fonctionnalités Détaillées

### Gestion du Panier (cartSlice)

#### Actions disponibles
- `addToCart(item)` : Ajoute un article au panier
- `updateQuantity({id, quantity})` : Met à jour la quantité d'un article
- `deleteItem(item)` : Supprime un article du panier
- `resetCart()` : Vide complètement le panier
- `getSubTotalPrice()` : Calcule le sous-total

#### Structure d'un article
```javascript
{
  id: string,           // Identifiant unique
  name: string,         // Nom du plat
  price: number,        // Prix en USD
  quantity: number,     // Quantité commandée
  image: string,        // URL de l'image
  restaurantId: string  // ID du restaurant
}
```

### Composant Cart
- Affichage conditionnel (panier vide vs panier avec articles)
- Confirmation avant vidage du panier
- Calcul automatique des totaux
- Interface responsive

### Composant RestaurantDetailCartItem
- Contrôles de quantité avec boutons +/-
- Suppression automatique si quantité = 0
- Affichage des informations restaurant
- Conversion automatique de devise

## 🎯 Bonnes Pratiques

### Code Quality
- **Commentaires complets** : Chaque fonction documentée
- **Tests unitaires** : Couverture complète des fonctionnalités
- **Gestion d'erreurs** : try/catch pour localStorage
- **Optimisation** : useCallback pour éviter les re-renders

### Performance
- **Persistance** : Données sauvegardées en localStorage
- **Memoization** : Fonctions optimisées avec useCallback
- **Calculs efficaces** : Subtotal calculé uniquement quand nécessaire

### Accessibilité
- **Labels ARIA** : Boutons avec aria-label
- **Navigation clavier** : Support complet
- **Hiérarchie de titres** : Structure H1, H2 appropriée
- **Contraste** : Couleurs accessibles

## 🔧 Scripts Disponibles

- `npm start` : Lance l'application en mode développement
- `npm test` : Lance les tests en mode watch
- `npm run build` : Build de production
- `npm run eject` : Éjecte la configuration (non recommandé)

## 🐛 Résolution de Problèmes

### Problèmes Courants

1. **Le panier ne se sauvegarde pas**
   - Vérifiez que localStorage est activé dans votre navigateur
   - Consultez la console pour les erreurs JavaScript

2. **Les prix ne s'affichent pas correctement**
   - Vérifiez la fonction `usdToTnd` dans `utils/helpers.js`
   - Assurez-vous que les constantes sont importées

3. **Les tests échouent**
   - Lancez `npm install` pour installer toutes les dépendances
   - Vérifiez que Jest est configuré correctement

## 📈 Prochaines Fonctionnalités

- [ ] Authentification utilisateur
- [ ] Historique des commandes
- [ ] Système de favoris
- [ ] Notifications push
- [ ] Mode sombre
- [ ] Support multilingue
- [ ] Integration API de paiement
- [ ] Suivi de livraison en temps réel

## 🤝 Contribution

Les contributions sont les bienvenues ! Pour contribuer :

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

### Guidelines de Contribution
- Suivre les conventions de code existantes
- Ajouter des tests pour les nouvelles fonctionnalités
- Documenter les changements dans le README
- S'assurer que tous les tests passent

## 📄 License

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 👨‍💻 Auteur

**Anis Zarrouk**
- GitHub: [@anis-zarrouk](https://github.com/anis-zarrouk)
- Email: anis.zarrouk@example.com

## 🙏 Remerciements

- React Team pour l'excellent framework
- Redux Toolkit pour la gestion d'état simplifiée
- Tailwind CSS pour le système de design
- Testing Library pour les outils de test
- Communauté open source pour l'inspiration

---

*Développé avec ❤️ pour la communauté*