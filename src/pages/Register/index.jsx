import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { register } from '../../store/features/authSlice';

const Register = () => {
  const [form, setForm] = useState({
    fullName:'',
    email:'',
    password:'',
    phoneNumber:'',
    address:'',
    role:'',
    // Restaurant info fields
    restaurantName: '',
    restaurantImage: null,
    restaurantType: '',
    restaurantCategory: '',
    restaurantTags: [],
    restaurantAddress: '',
    restaurantStreet: '',
    restaurantCity: '',
    restaurantZipCode: '',
    restaurantPhone: '',
    restaurantDescription: '',
    // Business info fields
    openingHours: '',
    deliveryFee: '',
    deliveryZone: '',
    minimumOrder: ''
  });
  const [imagePreview, setImagePreview] = useState(null);
  const [tagInput, setTagInput] = useState('');
  const dispatch = useDispatch();
  const { users } = useSelector(state => state.auth);

  useEffect(() => {
    //dispatch(reset())
  }, []);
  const handleChange = (e) => {
    const {name, value} = e.target;
    setForm({
      ...form,
      [name]: value
    })
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Check if file is an image
      if (!file.type.startsWith('image/')) {
        alert('Veuillez sélectionner une image valide');
        return;
      }

      // Check file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('La taille de l\'image ne doit pas dépasser 5MB');
        return;
      }

      setForm({
        ...form,
        restaurantImage: file
      });

      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }

  const handleAddTag = () => {
    const trimmedTag = tagInput.trim();
    if (trimmedTag && !form.restaurantTags.includes(trimmedTag)) {
      setForm({
        ...form,
        restaurantTags: [...form.restaurantTags, trimmedTag]
      });
      setTagInput('');
    }
  }

  const handleRemoveTag = (tagToRemove) => {
    setForm({
      ...form,
      restaurantTags: form.restaurantTags.filter(tag => tag !== tagToRemove)
    });
  }

  const handleTagKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddTag();
    }
  }

  const onSubmit = (e) => {
    e.preventDefault();
    try {
         const userFound = users.find(user => user.email === form.email);
         if(!userFound){
           dispatch(register(form))
           
         } else {
           console.log('user already exist !');
         }
  
    } catch (error) {
        console.log(error);
    }

  }
  return (
    <div className="min-h-screen bg-white">
      <div className="w-full flex min-h-screen">
        {/* Form Section */}
        <div className="w-1/2 p-8 lg:p-12 flex items-center justify-center overflow-y-auto">
          <div className="max-w-md w-full my-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900">Create Account</h2>
                <p className="mt-2 text-gray-600">
                  {form.role === 'restaurant_owner'
                    ? 'Rejoignez-nous et commencez à développer votre restaurant'
                    : 'Join us and start ordering'}
                </p>
              </div>

              <form className="space-y-6"
              onSubmit={onSubmit}
              >
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Enter your full name"
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Enter your email"
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Create a password"
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="tel"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Enter your phone number"
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                    Address
                  </label>
                  <input
                    id="address"
                    name="address"
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Enter your address"
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="userType" className="block text-sm font-medium text-gray-700 mb-2">
                    User Type
                  </label>
                  <select
                    id="userType"
                    name="role"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    onChange={handleChange}
                  >
                    <option value="">Select user type</option>
                    <option value="customer">Customer</option>
                    <option value="restaurant_owner">Restaurant Owner</option>
                  </select>
                </div>

                {/* Restaurant Information Section - Only visible for restaurant owners */}
                {form.role === 'restaurant_owner' && (
                  <>
                    <div className="border-t border-gray-200 pt-6 mt-2">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <span>🏪</span> Informations du Restaurant
                      </h3>

                      <div className="space-y-4">
                        <div>
                          <label htmlFor="restaurantName" className="block text-sm font-medium text-gray-700 mb-2">
                            Nom du Restaurant *
                          </label>
                          <input
                            id="restaurantName"
                            name="restaurantName"
                            type="text"
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                            placeholder="Ex: Le Petit Bistrot"
                            onChange={handleChange}
                          />
                        </div>

                        <div>
                          <label htmlFor="restaurantImage" className="block text-sm font-medium text-gray-700 mb-2">
                            Image du Restaurant *
                          </label>
                          <div className="space-y-4">
                            <input
                              id="restaurantImage"
                              name="restaurantImage"
                              type="file"
                              accept="image/*"
                              required
                              onChange={handleImageChange}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100"
                            />
                            <p className="text-xs text-gray-500">PNG, JPG, JPEG (max 5MB)</p>
                            {imagePreview && (
                              <div className="w-full max-w-sm">
                                <p className="text-sm font-medium text-gray-700 mb-2">Aperçu:</p>
                                <div className="w-full h-48 border-2 border-gray-300 rounded-lg overflow-hidden bg-gray-50">
                                  <img
                                    src={imagePreview}
                                    alt="Restaurant preview"
                                    className="w-full h-full object-contain"
                                  />
                                </div>
                              </div>
                            )}
                          </div>
                        </div>

                        <div>
                          <label htmlFor="restaurantType" className="block text-sm font-medium text-gray-700 mb-2">
                            Type *
                          </label>
                          <select
                            id="restaurantType"
                            name="restaurantType"
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                            onChange={handleChange}
                          >
                            <option value="">Select type</option>
                            <option value="restaurant">Restaurant</option>
                            <option value="quick_bite">Quick Bite</option>
                          </select>
                        </div>

                        <div>
                          <label htmlFor="restaurantCategory" className="block text-sm font-medium text-gray-700 mb-2">
                            Category *
                          </label>
                          <select
                            id="restaurantCategory"
                            name="restaurantCategory"
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                            onChange={handleChange}
                          >
                            <option value="">Select category</option>
                            <option value="Burger">Burger</option>
                            <option value="Pizza">Pizza</option>
                            <option value="Sushi">Sushi</option>
                            <option value="mexican">Mexican</option>
                            <option value="healthy">Healthy</option>
                            <option value="asian">Asian</option>
                            <option value="cafe">Cafe</option>
                            <option value="bar">Bar</option>
                          </select>
                        </div>

                        <div>
                          <label htmlFor="restaurantTags" className="block text-sm font-medium text-gray-700 mb-2">
                            Tags
                          </label>
                          <div className="space-y-3">
                            <div className="flex gap-2">
                              <input
                                id="restaurantTags"
                                type="text"
                                list="tag-suggestions"
                                value={tagInput}
                                onChange={(e) => setTagInput(e.target.value)}
                                onKeyDown={handleTagKeyDown}
                                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                placeholder="Tapez un tag (ex: Italian, Vegan...)"
                              />
                              <datalist id="tag-suggestions">
                                <option value="Italian" />
                                <option value="American" />
                                <option value="Japanese" />
                                <option value="Chinese" />
                                <option value="Mexican" />
                                <option value="French" />
                                <option value="Indian" />
                                <option value="Thai" />
                                <option value="Lebanese" />
                                <option value="Fast Food" />
                                <option value="Healthy" />
                                <option value="Vegan" />
                                <option value="Vegetarian" />
                                <option value="Halal" />
                                <option value="Organic" />
                                <option value="Burgers" />
                                <option value="Pizza" />
                                <option value="Sushi" />
                                <option value="Noodles" />
                                <option value="Salads" />
                                <option value="Tacos" />
                                <option value="Coffee" />
                                <option value="Pastries" />
                                <option value="Breakfast" />
                                <option value="Cocktails" />
                                <option value="Late Night" />
                                <option value="Premium" />
                                <option value="Specialty Coffee" />
                                <option value="Rooftop View" />
                              </datalist>
                              <button
                                type="button"
                                onClick={handleAddTag}
                                disabled={!tagInput.trim()}
                                className="px-6 py-3 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                              >
                                Add
                              </button>
                            </div>
                            {form.restaurantTags.length > 0 && (
                              <div className="flex flex-wrap gap-2">
                                {form.restaurantTags.map((tag, index) => (
                                  <span
                                    key={index}
                                    className="inline-flex items-center gap-2 px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium"
                                  >
                                    {tag}
                                    <button
                                      type="button"
                                      onClick={() => handleRemoveTag(tag)}
                                      className="hover:text-orange-900 focus:outline-none"
                                    >
                                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                      </svg>
                                    </button>
                                  </span>
                                ))}
                              </div>
                            )}
                            <p className="text-xs text-gray-500">💡 Tapez votre tag et appuyez sur Entrée ou cliquez sur "Add" pour l'ajouter</p>
                          </div>
                        </div>

                        <div>
                          <label htmlFor="restaurantStreet" className="block text-sm font-medium text-gray-700 mb-2">
                            Adresse (Rue) *
                          </label>
                          <input
                            id="restaurantStreet"
                            name="restaurantStreet"
                            type="text"
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                            placeholder="Ex: 123 Rue de la Paix"
                            onChange={handleChange}
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="restaurantCity" className="block text-sm font-medium text-gray-700 mb-2">
                              Ville *
                            </label>
                            <input
                              id="restaurantCity"
                              name="restaurantCity"
                              type="text"
                              required
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                              placeholder="Ex: Paris"
                              onChange={handleChange}
                            />
                          </div>
                          <div>
                            <label htmlFor="restaurantZipCode" className="block text-sm font-medium text-gray-700 mb-2">
                              Code Postal *
                            </label>
                            <input
                              id="restaurantZipCode"
                              name="restaurantZipCode"
                              type="text"
                              required
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                              placeholder="Ex: 75001"
                              onChange={handleChange}
                            />
                          </div>
                        </div>

                        <div>
                          <label htmlFor="restaurantPhone" className="block text-sm font-medium text-gray-700 mb-2">
                            Téléphone du Restaurant *
                          </label>
                          <input
                            id="restaurantPhone"
                            name="restaurantPhone"
                            type="tel"
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                            placeholder="Ex: +33 1 23 45 67 89"
                            onChange={handleChange}
                          />
                        </div>

                        <div>
                          <label htmlFor="restaurantDescription" className="block text-sm font-medium text-gray-700 mb-2">
                            Description
                          </label>
                          <textarea
                            id="restaurantDescription"
                            name="restaurantDescription"
                            rows="3"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
                            placeholder="Décrivez votre restaurant (optionnel)"
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Business Information Section */}
                    <div className="border-t border-gray-200 pt-6 mt-2">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <span>💼</span> Informations Commerciales
                      </h3>

                      <div className="space-y-4">
                        <div>
                          <label htmlFor="openingHours" className="block text-sm font-medium text-gray-700 mb-2">
                            Horaires d'Ouverture *
                          </label>
                          <input
                            id="openingHours"
                            name="openingHours"
                            type="text"
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                            placeholder="Ex: Lun-Dim 11h-23h"
                            onChange={handleChange}
                          />
                        </div>

                        <div>
                          <label htmlFor="deliveryFee" className="block text-sm font-medium text-gray-700 mb-2">
                            Frais de Livraison (€) *
                          </label>
                          <input
                            id="deliveryFee"
                            name="deliveryFee"
                            type="number"
                            step="0.01"
                            min="0"
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                            placeholder="Ex: 2.50"
                            onChange={handleChange}
                          />
                        </div>

                        <div>
                          <label htmlFor="deliveryZone" className="block text-sm font-medium text-gray-700 mb-2">
                            Zone de Livraison *
                          </label>
                          <input
                            id="deliveryZone"
                            name="deliveryZone"
                            type="text"
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                            placeholder="Ex: 5 km ou quartiers spécifiques"
                            onChange={handleChange}
                          />
                        </div>

                        <div>
                          <label htmlFor="minimumOrder" className="block text-sm font-medium text-gray-700 mb-2">
                            Commande Minimum (€)
                          </label>
                          <input
                            id="minimumOrder"
                            name="minimumOrder"
                            type="number"
                            step="0.01"
                            min="0"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                            placeholder="Ex: 15.00 (optionnel)"
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                  </>
                )}

                <div className="flex items-center">
                  <input
                    id="agree-terms"
                    name="agree-terms"
                    type="checkbox"
                    required
                    className="h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-300 rounded"
                  />
                  <label htmlFor="agree-terms" className="ml-2 block text-sm text-gray-700">
                    I agree to the{' '}
                    <Link to="/terms" className="text-orange-500 hover:text-orange-600">
                      Terms of Service
                    </Link>{' '}
                    and{' '}
                    <Link to="/privacy" className="text-orange-500 hover:text-orange-600">
                      Privacy Policy
                    </Link>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-500 text-white py-3 px-4 rounded-lg font-medium hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-colors"
                >
                  Create Account
                </button>

                <div className="text-center">
                  <p className="text-sm text-gray-600">
                    Already have an account?{' '}
                    <Link to="/login" className="text-orange-500 hover:text-orange-600 font-medium">
                      Sign in
                    </Link>
                  </p>
                </div>
            </form>
          </div>
        </div>

        {/* Image Section - Changes based on selected role */}
        <div className="w-1/2 relative overflow-hidden">
          <img
            src={
              form.role === 'restaurant_owner'
                ? 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&auto=format&fit=crop&q=80'
                : 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920&auto=format&fit=crop&q=80'
            }
            alt={form.role === 'restaurant_owner' ? 'Restaurant management' : 'Food delivery'}
            className={`absolute inset-0 w-full h-full transition-opacity duration-500 object-cover `}
          />
        </div>
      </div>
    </div>
  )
}

export default Register