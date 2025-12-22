"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Building2, CheckCircle2, Clock, MapPin, Phone, Package, Sparkles, TruckIcon, Lightbulb, Instagram } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"

export default function LandingPage() {
  const scrollToContact = () => {
    window.open("https://wa.me/5593991250229", "_blank")
  }

  const scrollToServices = () => {
    const element = document.getElementById("services")
    element?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  const scrollToAbout = () => {
    const element = document.getElementById("about")
    element?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <div className="min-h-screen">
      <header className="border-b border-border bg-background/95 backdrop-blur-md sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image 
              src="/images/image.png" 
              alt="Caiuá Construções" 
              width={80} 
              height={80} 
              className="w-16 h-16 rounded-lg shadow-sm" 
            />
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-primary">Caiuá Construções</h1>
              <p className="text-xs text-muted-foreground">Cerâmica, Construção e Acabamentos</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden md:block text-sm font-medium text-foreground">(93) 99125-0229</span>
            <Button
              onClick={scrollToContact}
              className="bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <Phone className="w-4 h-4 mr-2" />
              Contato
            </Button>
          </div>
        </div>
      </header>

      <section className="relative py-24 md:py-36 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 blueprint-pattern opacity-30"></div>
          <img
            src="/construction-worker-with-hard-hat-at-building-site.jpg"
            alt="Construção profissional"
            className="w-full h-full object-cover"
            style={{
              transform: "scale(1.05)",
              willChange: "transform",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 md:px-12 lg:px-16 xl:px-20 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-primary/90 text-primary-foreground rounded text-sm font-semibold uppercase tracking-wide animate-fade-in shadow-lg">
              <MapPin className="w-4 h-4" />
              Rurópolis, PA
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white text-balance leading-[1.1] animate-fade-in-up" style={{ animationDelay: "0.2s", opacity: 0 }}>
              A sua casa pronta, <span className="text-primary drop-shadow-lg">do zero ao interior</span>
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-10 text-pretty leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.4s", opacity: 0 }}>
              Sem precisar lidar com 10 fornecedores diferentes. Centralize sua obra na Caiuá Construções: a autoridade
              técnica que Rurópolis confia para entregar qualidade, economia e o melhor design para o seu lar.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 animate-fade-in-up" style={{ animationDelay: "0.6s", opacity: 0 }}>
              <Button
                onClick={scrollToContact}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 shadow-lg transition-all duration-200 hover:shadow-xl hover:bg-primary/95 hover:-translate-y-0.5"
              >
                <Phone className="w-4 h-4 mr-2" />
                Solicitar Orçamento
              </Button>
              <Button
                onClick={scrollToServices}
                variant="outline"
                className="bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-sm px-6 py-3 transition-all duration-200 hover:bg-white/25 hover:-translate-y-0.5"
              >
                Nossos Serviços
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 blueprint-pattern opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <ScrollAnimation direction="up" delay={0}>
              <div className="text-center mb-12">
                <h3 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
                  A Solução Completa para sua Obra não Parar
                </h3>
                <div className="w-20 h-1 bg-primary mx-auto mb-6 animate-scale-in" style={{ animationDelay: "0.3s", opacity: 0 }}></div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation direction="up" delay={200}>
              <div className="bg-muted/50 border-2 border-primary/10 rounded-lg p-8 md:p-12 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <p className="text-xl text-center text-muted-foreground leading-relaxed">
                  Sabemos que o medo de todo proprietário é a obra paralisada por falta de um item pequeno ou erro de
                  cálculo. Nosso atendimento consultivo garante que você compre o pacote completo, evitando múltiplas
                  viagens e gastos extras com fretes indesejados.{" "}
                  <strong className="text-foreground">
                    Construa com a segurança de um parceiro que resolve seus problemas.
                  </strong>
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-background relative">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <ScrollAnimation direction="up">
              <div className="text-center mb-12">
                <h3 className="text-3xl md:text-5xl font-bold mb-4">Sobre Nós</h3>
                <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
              </div>
            </ScrollAnimation>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <ScrollAnimation direction="right" delay={100}>
                <div className="relative h-96 bg-muted rounded-2xl overflow-hidden shadow-xl group">
                  <img
                    src="/modern-construction-materials-showroom-with-tiles-.jpg"
                    alt="Loja Caiuá Construções"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </ScrollAnimation>
              <ScrollAnimation direction="left" delay={200}>
              <div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  A Caiuá Construções representa o porto seguro de quem deseja edificar um patrimônio com inteligência e
                  solidez. Consolidada como uma empresa familiar que honra o investimento de cada cliente, transformamos
                  a simples venda de materiais em uma consultoria completa para sua obra.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Nossa trajetória é marcada pela entrega de soluções que abrangem desde a infraestrutura bruta até o
                  refinamento do design de interiores.
                </p>
                <div className="flex items-start gap-3 mb-4">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1 animate-float" style={{ animationDelay: "0s" }} />
                  <p className="text-muted-foreground">Mais de anos servindo Rurópolis e região com excelência</p>
                </div>
                <div className="flex items-start gap-3 mb-4">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1 animate-float" style={{ animationDelay: "0.2s" }} />
                  <p className="text-muted-foreground">Centenas de obras entregues com qualidade e pontualidade</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1 animate-float" style={{ animationDelay: "0.4s" }} />
                  <p className="text-muted-foreground">Parceiros das principais marcas do mercado</p>
                </div>
              </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 blueprint-pattern opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <ScrollAnimation direction="up">
              <div className="text-center mb-16">
                <h3 className="text-3xl md:text-5xl font-bold mb-4">Por Que Escolher a Caiuá Construções?</h3>
                <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Diferenciais que garantem o sucesso da sua construção
                </p>
              </div>
            </ScrollAnimation>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ScrollAnimation direction="up" delay={0}>
                <Card className="border-2 hover:border-primary hover:shadow-lg transition-all duration-300 group cursor-pointer hover:scale-105 hover:-translate-y-1">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 bg-primary/10 group-hover:bg-primary rounded-lg flex items-center justify-center mb-4 transition-all duration-300 mx-auto group-hover:scale-110">
                      <Building2 className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <h4 className="text-xl font-bold mb-3">Do Bruto ao Acabamento Fino</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Monte sua obra toda do zero conosco. Oferecemos desde cimento e ferragens até itens de alta margem e
                      design, como iluminação, pisos, revestimentos e kits de banheiro.
                    </p>
                  </CardContent>
                </Card>
              </ScrollAnimation>

              <ScrollAnimation direction="up" delay={100}>
                <Card className="border-2 hover:border-primary hover:shadow-lg transition-all duration-300 group cursor-pointer hover:scale-105 hover:-translate-y-1">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 bg-primary/10 group-hover:bg-primary rounded-lg flex items-center justify-center mb-4 transition-all duration-300 mx-auto group-hover:scale-110">
                      <CheckCircle2 className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <h4 className="text-xl font-bold mb-3">Orçamento Ágil e Consultivo</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Não apenas informamos preços; nosso time técnico sugere produtos complementares para evitar
                      retrabalho e garantir que nada falte na sua obra.
                    </p>
                  </CardContent>
                </Card>
              </ScrollAnimation>

              <ScrollAnimation direction="up" delay={200}>
                <Card className="border-2 hover:border-primary hover:shadow-lg transition-all duration-300 group cursor-pointer hover:scale-105 hover:-translate-y-1">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 bg-primary/10 group-hover:bg-primary rounded-lg flex items-center justify-center mb-4 transition-all duration-300 mx-auto group-hover:scale-110">
                      <Sparkles className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <h4 className="text-xl font-bold mb-3">Variedade que Rurópolis Merece</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Trazemos modelos e produtos exclusivos que você não encontra em outros fornecedores locais,
                      garantindo a estética e qualidade do seu sonho.
                    </p>
                  </CardContent>
                </Card>
              </ScrollAnimation>

              <ScrollAnimation direction="up" delay={300}>
                <Card className="border-2 hover:border-primary hover:shadow-lg transition-all duration-300 group cursor-pointer hover:scale-105 hover:-translate-y-1">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 bg-primary/10 group-hover:bg-primary rounded-lg flex items-center justify-center mb-4 transition-all duration-300 mx-auto group-hover:scale-110">
                      <TruckIcon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <h4 className="text-xl font-bold mb-3">Entrega Local Especializada</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Logística focada em Rurópolis e cidades vizinhas (raio de até 90km), com o cuidado e a pontualidade
                      que sua construção exige.
                    </p>
                  </CardContent>
                </Card>
              </ScrollAnimation>

              <ScrollAnimation direction="up" delay={400}>
                <Card className="border-2 hover:border-primary hover:shadow-lg transition-all duration-300 group cursor-pointer hover:scale-105 hover:-translate-y-1">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 bg-primary/10 group-hover:bg-primary rounded-lg flex items-center justify-center mb-4 transition-all duration-300 mx-auto group-hover:scale-110">
                      <Package className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <h4 className="text-xl font-bold mb-3">A Segurança de Quem Constrói ao Seu Lado</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Investir em uma obra é realizar um sonho, e nós levamos isso a sério. Como uma empresa familiar
                      consolidada, tratamos o seu projeto como se fosse nosso.
                    </p>
                  </CardContent>
                </Card>
              </ScrollAnimation>

              <ScrollAnimation direction="up" delay={500}>
                <Card className="border-2 hover:border-primary hover:shadow-lg transition-all duration-300 group cursor-pointer hover:scale-105 hover:-translate-y-1">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 bg-primary/10 group-hover:bg-primary rounded-lg flex items-center justify-center mb-4 transition-all duration-300 mx-auto group-hover:scale-110">
                      <Lightbulb className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <h4 className="text-xl font-bold mb-3">Consultoria Técnica de Autoridade</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Mais do que vender materiais, oferecemos uma consultoria técnica de autoridade para garantir que seu
                      investimento seja inteligente e sem desperdícios.
                    </p>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0 blueprint-pattern"
            style={{
              backgroundImage: "url('/construction-blueprint-pattern.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <ScrollAnimation direction="up" delay={0}>
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
                Construir não precisa ser sinônimo de dor de cabeça
              </h3>
              <p className="text-xl mb-10 text-white/90 leading-relaxed">
                Ou idas e vindas a várias lojas. Nós cuidamos da parte técnica para você focar apenas em ver seu sonho
                ganhar forma. Toque no botão abaixo para garantir sua obra completa com orçamento ágil pelo WhatsApp.
              </p>
              <Button
                onClick={scrollToContact}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 shadow-xl transition-all duration-200 hover:shadow-2xl hover:bg-primary/95 hover:-translate-y-1"
              >
                <Phone className="w-4 h-4 mr-2" />
                Solicitar Orçamento Rápido
              </Button>
              <p className="mt-6 text-white/70 text-sm">Resposta em até 2 horas durante horário comercial</p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Image src="/images/image.png" alt="Caiuá Construções" width={50} height={50} className="w-12 h-12 rounded-lg" />
                  <div>
                    <h4 className="font-bold text-primary-foreground">Caiuá Construções</h4>
                    <p className="text-xs text-primary-foreground/80">Cerâmica, Construção e Acabamentos</p>
                  </div>
                </div>
                <div className="flex gap-3 mt-4">
                  <Button
                    className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-md hover:shadow-lg transition-all duration-200"
                    onClick={() => window.open("https://www.instagram.com/caiuaconstrucoes/", "_blank")}
                  >
                    <Instagram className="w-4 h-4 mr-2" />
                    Seguir no Instagram
                  </Button>
                </div>
              </div>
              <div>
                <h4 className="font-bold mb-3 flex items-center gap-2 text-primary-foreground">
                  <Phone className="w-4 h-4" />
                  Telefone
                </h4>
                <p className="text-primary-foreground/90">(93) 99125-0229</p>
                <Button
                  variant="link"
                  className="p-0 h-auto mt-2 text-primary-foreground hover:text-primary-foreground/80"
                  onClick={scrollToContact}
                >
                  Fale conosco
                </Button>
              </div>
              <div>
                <h4 className="font-bold mb-3 flex items-center gap-2 text-primary-foreground">
                  <MapPin className="w-4 h-4" />
                  Endereço
                </h4>
                <p className="text-primary-foreground/90 text-sm">
                  Rodovia Transamazônica, 625 - A<br />
                  Aeroporto l, Rurópolis
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-3 text-primary-foreground">Links Rápidos</h4>
                <div className="flex flex-col gap-2">
                  <button
                    onClick={scrollToAbout}
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors text-left"
                  >
                    Sobre Nós
                  </button>
                  <button
                    onClick={scrollToServices}
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors text-left"
                  >
                    Nossos Serviços
                  </button>
                </div>
              </div>
            </div>
            <div className="border-t border-primary-foreground/20 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-center md:text-left">
                  <p className="text-sm text-primary-foreground/80 flex items-center gap-2 justify-center md:justify-start mb-2">
                    <Clock className="w-4 h-4" />
                    Horário de Funcionamento
                  </p>
                  <p className="text-sm text-primary-foreground/80">
                    Segunda a sexta - 08:00 às 18h | Sábado - 08:00 às 13:00
                  </p>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/80">
                <p>© 2025 Caiuá Construções. Todos os direitos reservados.</p>
                <p className="mt-2">CNPJ: 47.877.499/0001-83</p>
                <div className="mt-4 flex justify-center">
                  <Image 
                    src="/dev-igor-cardoso.png" 
                    alt="Desenvolvido por Igor Cardoso" 
                    width={150} 
                    height={40}
                    className="h-8 w-auto opacity-90 hover:opacity-100 transition-opacity"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
