"use client"

import type React from "react"
import { useState, useEffect } from "react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    income: "",
    phone: "",
    captcha: "",
  })

  const [captchaQuestion, setCaptchaQuestion] = useState({ question: "", answer: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    generateCaptcha()
  }, [])

  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10) + 1
    const num2 = Math.floor(Math.random() * 10) + 1
    const operations = ["+", "-"]
    const operation = operations[Math.floor(Math.random() * operations.length)]

    let answer
    if (operation === "+") {
      answer = num1 + num2
    } else {
      answer = num1 - num2
    }

    setCaptchaQuestion({
      question: `${num1} ${operation} ${num2} = ?`,
      answer: answer.toString(),
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Validação simples do captcha
      if (formData.captcha !== captchaQuestion.answer) {
        alert("Por favor, resolva a operação matemática corretamente.")
        setIsSubmitting(false)
        return
      }

      // Validação dos campos obrigatórios
      if (!formData.name || !formData.email || !formData.income || !formData.phone) {
        alert("Por favor, preencha todos os campos obrigatórios.")
        setIsSubmitting(false)
        return
      }

      // Criar FormData para envio
      const form = new FormData()
      form.append("name", formData.name)
      form.append("email", formData.email)
      form.append("income", formData.income)
      form.append("phone", formData.phone)
      form.append(
        "message",
        `Nome: ${formData.name}\nEmail: ${formData.email}\nRenda Familiar: ${formData.income}\nTelefone: ${formData.phone}`,
      )
      form.append("_next", window.location.origin + "/?success=true")
      form.append("_subject", "Novo lead - Art Paisage")
      form.append("_captcha", "false")
      form.append("_template", "table")

      const response = await fetch("https://formsubmit.co/carlosalberto@especimoveis.com.br", {
        method: "POST",
        body: form,
      })

      if (response.ok) {
        alert("Cadastro realizado com sucesso! Entraremos em contato em breve.")
        setFormData({
          name: "",
          email: "",
          income: "",
          phone: "",
          captcha: "",
        })
        generateCaptcha() // Gera novo captcha após envio
      } else {
        throw new Error("Erro no envio")
      }
    } catch (error) {
      console.error("Erro ao enviar formulário:", error)
      alert("Erro ao enviar formulário. Tente novamente ou entre em contato pelo WhatsApp.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact-form" className="bg-[#00313b] py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Formulário */}
          <div className="bg-transparent p-8 rounded-lg">
            <div className="text-center mb-8">
              <img
                src="https://d335luupugsy2.cloudfront.net/cms/files/712823/1749216591/$y3r268fgswn"
                alt="Art Paisage Logo"
                className="w-full max-w-sm mx-auto h-auto"
              />
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white text-sm font-medium mb-2">
                  Nome*
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-md border-0 bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-[#3aa54e] focus:outline-none disabled:opacity-50"
                  placeholder="Digite seu nome completo"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white text-sm font-medium mb-2">
                  Email*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-md border-0 bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-[#3aa54e] focus:outline-none disabled:opacity-50"
                  placeholder="Digite seu melhor email"
                />
              </div>

              <div>
                <label htmlFor="income" className="block text-white text-sm font-medium mb-2">
                  Selecione, por favor, sua renda familiar:*
                </label>
                <select
                  id="income"
                  name="income"
                  value={formData.income}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-md border-0 bg-white text-gray-900 focus:ring-2 focus:ring-[#3aa54e] focus:outline-none disabled:opacity-50"
                >
                  <option value="">Selecione sua faixa de renda</option>
                  <option value="R$ 5.000,00 a R$ 10.000,00">R$ 5.000,00 a R$ 10.000,00</option>
                  <option value="R$ 10.000,00 a R$ 15.000,00">R$ 10.000,00 a R$ 15.000,00</option>
                  <option value="Acima de R$ 15.000,00">Acima de R$ 15.000,00</option>
                </select>
              </div>

              <div>
                <label htmlFor="phone" className="block text-white text-sm font-medium mb-2">
                  Telefone*
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-md border-0 bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-[#3aa54e] focus:outline-none disabled:opacity-50"
                  placeholder="(12) 99999-9999"
                />
              </div>

              <div>
                <label htmlFor="captcha" className="block text-white text-sm font-medium mb-2">
                  Resolva a operação: {captchaQuestion.question}
                </label>
                <input
                  type="number"
                  id="captcha"
                  name="captcha"
                  value={formData.captcha}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-md border-0 bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-[#3aa54e] focus:outline-none disabled:opacity-50"
                  placeholder="Digite o resultado"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#3aa54e] text-[#002d39] py-4 px-8 rounded-full text-xl font-bold hover:bg-opacity-90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "ENVIANDO..." : "CADASTRE-SE"}
              </button>
            </form>

            {/* Informação adicional */}
            <div className="mt-6 text-center">
              <p className="text-white text-sm">
                Ou entre em contato diretamente pelo WhatsApp clicando no botão verde no canto da tela.
              </p>
            </div>
          </div>

          {/* Imagem lateral */}
          <div className="flex items-center justify-center">
            <img
              src="https://d335luupugsy2.cloudfront.net/cms/files/712823/1749581881/$r5rs2a7jn7"
              alt="Art Paisage Render"
              className="w-full max-w-md h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
