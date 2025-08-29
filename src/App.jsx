"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import {
  Menu,
  X,
  MessageCircle,
  Users,
  BarChart3,
  Check,
  Star,
  ArrowRight,
  Play,
  Shield,
  Zap,
  Clock,
} from "lucide-react"

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState({})

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }))
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = document.querySelectorAll("[data-animate]")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="text-2xl font-bold text-primary">Supportal</span>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#home" className="text-foreground hover:text-primary transition-colors">
                  Home
                </a>
                <a href="#features" className="text-foreground hover:text-primary transition-colors">
                  Features
                </a>
                <a href="#pricing" className="text-foreground hover:text-primary transition-colors">
                  Pricing
                </a>
                <a href="#testimonials" className="text-foreground hover:text-primary transition-colors">
                  Reviews
                </a>
                <a href="#contact" className="text-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <button className="text-foreground hover:text-primary transition-colors">Sign In</button>
              <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
                Get Started
              </button>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-foreground hover:text-primary">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-b border-border">
              <a href="#home" className="block px-3 py-2 text-foreground hover:text-primary">
                Home
              </a>
              <a href="#features" className="block px-3 py-2 text-foreground hover:text-primary">
                Features
              </a>
              <a href="#pricing" className="block px-3 py-2 text-foreground hover:text-primary">
                Pricing
              </a>
              <a href="#testimonials" className="block px-3 py-2 text-foreground hover:text-primary">
                Reviews
              </a>
              <a href="#contact" className="block px-3 py-2 text-foreground hover:text-primary">
                Contact
              </a>
              <div className="px-3 py-2 space-y-2">
                <button className="block w-full text-left text-foreground hover:text-primary">Sign In</button>
                <button className="block w-full bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden bg-gradient-to-br from-background to-muted py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
                Ultimate support system for <span className="text-primary">leading agencies</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 text-pretty">
                We deliver comprehensive support solutions that empower your agency to provide exceptional customer
                service and drive business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-primary text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
                  Get Started <ArrowRight size={20} />
                </button>
                <button className="border border-border text-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-muted transition-colors flex items-center justify-center gap-2">
                  <Play size={20} /> Watch Demo
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <img
                src="/person-with-laptop-and-chat-bubbles-support-system.png"
                alt="Support system illustration"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              id="feature-1"
              data-animate
              className={`bg-card p-8 rounded-2xl border border-border transition-all duration-700 ${
                isVisible["feature-1"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <MessageCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-card-foreground mb-4">We provided best support</h3>
              <p className="text-muted-foreground text-lg">
                Our comprehensive support system ensures your customers receive immediate assistance through multiple
                channels, enhancing satisfaction and loyalty.
              </p>
            </motion.div>

            <motion.div
              id="feature-2"
              data-animate
              className={`bg-card p-8 rounded-2xl border border-border transition-all duration-700 delay-200 ${
                isVisible["feature-2"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-card-foreground mb-4">We provide best help support</h3>
              <p className="text-muted-foreground text-lg">
                Expert support team available 24/7 to help resolve complex issues and provide guidance for optimal
                platform utilization.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              id="product-info"
              data-animate
              className={`transition-all duration-700 ${
                isVisible["product-info"] ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
            >
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Meet our premium features that will make you wow 🤩
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Advanced ticket management</h4>
                    <p className="text-muted-foreground">
                      Streamline your support workflow with intelligent ticket routing and priority management.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Real-time chat integration</h4>
                    <p className="text-muted-foreground">
                      Connect with customers instantly through our seamless chat interface.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Analytics and insights</h4>
                    <p className="text-muted-foreground">
                      Track performance metrics and gain valuable insights into your support operations.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              id="product-mockup"
              data-animate
              className={`transition-all duration-700 delay-300 ${
                isVisible["product-mockup"] ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
            >
              <div className="bg-card rounded-2xl p-6 shadow-2xl border border-border">
                <div className="bg-primary/5 rounded-xl p-4 mb-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-4 bg-primary/20 rounded w-3/4"></div>
                    <div className="h-4 bg-primary/10 rounded w-1/2"></div>
                    <div className="h-4 bg-primary/20 rounded w-2/3"></div>
                  </div>
                </div>
                <div className="bg-primary text-primary-foreground p-3 rounded-lg text-sm">
                  Real-time support dashboard with live metrics and customer interactions
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mobile App Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              id="mobile-mockup"
              data-animate
              className={`order-2 lg:order-1 transition-all duration-700 ${
                isVisible["mobile-mockup"] ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
            >
              <img
                src="/mobile-app-interface-showing-support-tickets-and-c.png"
                alt="Mobile app interface"
                className="w-full max-w-md mx-auto h-auto"
              />
            </motion.div>

            <motion.div
              id="mobile-info"
              data-animate
              className={`order-1 lg:order-2 transition-all duration-700 delay-200 ${
                isVisible["mobile-info"] ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
            >
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Built in one app to make instant reply with in lowest minutes ⚡
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Our mobile application ensures you never miss a customer inquiry. Respond instantly from anywhere with
                our powerful mobile support tools.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <Shield className="w-6 h-6 text-primary" />
                  <span className="text-foreground">Secure messaging</span>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="w-6 h-6 text-primary" />
                  <span className="text-foreground">Instant notifications</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-6 h-6 text-primary" />
                  <span className="text-foreground">24/7 availability</span>
                </div>
                <div className="flex items-center gap-3">
                  <BarChart3 className="w-6 h-6 text-primary" />
                  <span className="text-foreground">Real-time analytics</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Analytics Section */}
      <section className="py-20 bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              id="analytics-info"
              data-animate
              className={`transition-all duration-700 ${
                isVisible["analytics-info"] ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
            >
              <h2 className="text-4xl font-bold mb-6">
                Introduce quality feature that boost your website rank & performance
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Advanced analytics and performance monitoring tools help you understand customer behavior and optimize
                your support operations for maximum efficiency.
              </p>
              <button className="bg-primary text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors">
                Learn More
              </button>
            </motion.div>

            <motion.div
              id="analytics-mockup"
              data-animate
              className={`transition-all duration-700 delay-300 ${
                isVisible["analytics-mockup"] ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
            >
              <img
                src="/analytics-dashboard-with-charts-graphs-and-perform.png"
                alt="Analytics dashboard"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            id="pricing-header"
            data-animate
            className={`text-center mb-16 transition-all duration-700 ${
              isVisible["pricing-header"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">What did you pick?</h2>
            <p className="text-xl text-muted-foreground">Choose the perfect plan for your agency's needs</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              id="basic-plan"
              data-animate
              className={`bg-card p-8 rounded-2xl border border-border transition-all duration-700 ${
                isVisible["basic-plan"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-card-foreground mb-2">Basic Pack</h3>
                <p className="text-muted-foreground mb-4">Perfect for small teams getting started</p>
                <div className="text-4xl font-bold text-primary mb-2">
                  $29<span className="text-lg text-muted-foreground">/month</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary" />
                  <span className="text-card-foreground">Up to 5 team members</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary" />
                  <span className="text-card-foreground">Basic ticket management</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary" />
                  <span className="text-card-foreground">Email support</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary" />
                  <span className="text-card-foreground">Basic analytics</span>
                </li>
              </ul>
              <button className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                Get Started
              </button>
            </motion.div>

            <motion.div
              id="premium-plan"
              data-animate
              className={`bg-card p-8 rounded-2xl border-2 border-primary relative transition-all duration-700 delay-200 ${
                isVisible["premium-plan"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-card-foreground mb-2">Premium Pack</h3>
                <p className="text-muted-foreground mb-4">Advanced features for growing agencies</p>
                <div className="text-4xl font-bold text-primary mb-2">
                  $99<span className="text-lg text-muted-foreground">/month</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary" />
                  <span className="text-card-foreground">Unlimited team members</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary" />
                  <span className="text-card-foreground">Advanced ticket management</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary" />
                  <span className="text-card-foreground">24/7 priority support</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary" />
                  <span className="text-card-foreground">Advanced analytics & reporting</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary" />
                  <span className="text-card-foreground">Custom integrations</span>
                </li>
              </ul>
              <button className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                Get Started
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            id="testimonials-header"
            data-animate
            className={`text-center mb-16 transition-all duration-700 ${
              isVisible["testimonials-header"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">What client say about us</h2>
            <p className="text-xl text-muted-foreground">Hear from our satisfied customers</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              id="testimonial-1"
              data-animate
              className={`bg-card p-6 rounded-2xl border border-border transition-all duration-700 ${
                isVisible["testimonial-1"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-card-foreground mb-6">
                "Supportal has transformed our customer service operations. The response time has improved dramatically,
                and our customers are happier than ever."
              </p>
              <div className="flex items-center gap-3">
                <img
                  src="/professional-woman-diverse.png"
                  alt="Sarah Johnson"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-card-foreground">Sarah Johnson</h4>
                  <p className="text-muted-foreground text-sm">CEO, TechStart Inc.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              id="testimonial-2"
              data-animate
              className={`bg-card p-6 rounded-2xl border border-border transition-all duration-700 delay-200 ${
                isVisible["testimonial-2"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-card-foreground mb-6">
                "The analytics dashboard gives us incredible insights into our support performance. We've been able to
                optimize our processes significantly."
              </p>
              <div className="flex items-center gap-3">
                <img src="/professional-man.png" alt="Michael Chen" className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h4 className="font-semibold text-card-foreground">Michael Chen</h4>
                  <p className="text-muted-foreground text-sm">Operations Manager, GrowthCo</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              id="testimonial-3"
              data-animate
              className={`bg-card p-6 rounded-2xl border border-border transition-all duration-700 delay-400 ${
                isVisible["testimonial-3"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-card-foreground mb-6">
                "Easy to use, powerful features, and excellent customer support. Supportal is exactly what our agency
                needed to scale our operations."
              </p>
              <div className="flex items-center gap-3">
                <img
                  src="/professional-woman-smiling.png"
                  alt="Emily Rodriguez"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-card-foreground">Emily Rodriguez</h4>
                  <p className="text-muted-foreground text-sm">Founder, Creative Solutions</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-neutral-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            id="newsletter"
            data-animate
            className={`transition-all duration-700 ${
              isVisible["newsletter"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-4xl font-bold mb-4">Subscribe to get notified about update</h2>
            <p className="text-xl text-gray-300 mb-8">
              By subscribing with your mail, you will accept our privacy policy
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500"
              />
              <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 text-white py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold text-primary mb-4">Supportal</div>
              <p className="text-gray-300">Ultimate support system for leading agencies worldwide.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    API
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Status
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 Supportal. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
