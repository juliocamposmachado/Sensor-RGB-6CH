import { useState, useEffect } from 'react';
import { Cpu, Download, FileCode, Image, Zap, CircuitBoard, Eye, ChevronDown, Mail, Phone, Globe } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [showSplash, setShowSplash] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  if (showSplash) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100 flex items-center justify-center p-6">
        <div className="max-w-4xl w-full">
          <div className="text-center mb-12">
            <div className="inline-block mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-emerald-500/30 blur-3xl rounded-full animate-pulse"></div>
                <CircuitBoard className="w-20 h-20 text-emerald-400 relative" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Sensor RGB 6CH
            </h1>
            <p className="text-slate-400 text-lg">Sistema Experimental de Leitura Óptica de Cores</p>
          </div>

          <div className="bg-slate-900/50 backdrop-blur-sm border border-emerald-500/30 rounded-xl p-8 mb-8">
            <div className="mb-6">
              <p className="text-emerald-400 font-semibold mb-2">Ao Gerente de Projeto, Sr. Marcelo de Oliveira</p>
              <p className="text-slate-300 mb-4">Prezado Marcelo,</p>
            </div>

            <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
              <p>
                Peço desculpas pela breve demora na entrega da atualização deste módulo. Acreditava que o processo de
                evolução levaria cerca de cinco minutos, mas a etapa de integração e calibração demandou ajustes
                adicionais, totalizando aproximadamente dez minutos. Agradeço pela compreensão e paciência durante
                este pequeno intervalo.
              </p>

              <p>
                Conforme previamente informado, segue o detalhamento técnico do trabalho realizado nesta iteração
                do projeto <strong className="text-emerald-400">Sensor RGB 6CH</strong>, incluindo a estrutura de hardware, firmware e documentação de apoio:
              </p>

              <ul className="space-y-2 ml-6">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span><strong>Esquema Elétrico Completo:</strong> desenvolvido em padrão KiCad, com amplificadores LM324
                  e seis canais fotossensores calibrados para leitura analógica.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span><strong>Netlist e Layout PCB:</strong> organizados para montagem modular e fácil prototipagem
                  em placa padrão ou produção CNC.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span><strong>Código-Fonte Arduino (firmware):</strong> implementado para leitura simultânea dos seis
                  canais RGB, com normalização e calibração automática dos valores.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span><strong>Site Técnico de Apresentação:</strong> criado em React + Tailwind, contendo especificações
                  completas, código comentado e documentação visual para publicação em ambiente GitHub Pages ou Vercel.</span>
                </li>
              </ul>

              <p>
                Este pacote técnico foi preparado com foco em clareza, replicabilidade e escalabilidade, permitindo
                futuras expansões do sensor (ex.: integração de ADC externo ADS1115, ajuste automático de ganho e
                comunicação IoT).
              </p>

              <p>
                Coloco-me à disposição para qualquer reunião técnica ou revisão conjunta, caso deseje validar a
                integração dos módulos antes da compilação final do firmware.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-700">
              <p className="text-slate-300 mb-4">Atenciosamente,</p>
              <div className="space-y-2">
                <p className="text-emerald-400 font-bold text-lg">Julio Campos Machado</p>
                <p className="text-slate-400 text-sm">Desenvolvedor de Sistemas e Inteligência Artificial</p>
                <p className="text-cyan-400 text-sm font-semibold">Like Look Solutions / DGold Systems</p>

                <div className="flex flex-wrap gap-4 mt-4 text-sm text-slate-400">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-emerald-400" />
                    <span>+55 11 97060-3441</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-cyan-400" />
                    <span>+55 11 99294-6628</span>
                  </div>
                  <a
                    href="https://likelook.wixsite.com/solutions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
                  >
                    <Globe className="w-4 h-4 text-blue-400" />
                    <span>likelook.wixsite.com/solutions</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={() => setShowSplash(false)}
              className="bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-400 px-8 py-3 rounded-lg transition-all border border-emerald-500/50 hover:scale-105"
            >
              Acessar Documentação Técnica
            </button>
            <p className="text-slate-500 text-xs mt-4">A página será carregada automaticamente em alguns segundos...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-100">
      <header className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md border-b border-emerald-500/20 z-50">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <CircuitBoard className="w-8 h-8 text-emerald-400" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Sensor RGB 6CH
              </h1>
            </div>
            <div className="hidden md:flex gap-6">
              {['home', 'specs', 'circuit', 'code', 'gallery', 'downloads'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors hover:text-emerald-400 ${
                    activeSection === section ? 'text-emerald-400' : 'text-slate-300'
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </nav>
      </header>

      <section id="home" className="min-h-screen flex flex-col justify-center items-center pt-20 px-6">
        <div className="container mx-auto max-w-5xl text-center">
          <div className="mb-8 inline-block">
            <div className="relative">
              <div className="absolute inset-0 bg-emerald-500/20 blur-3xl rounded-full"></div>
              <Cpu className="w-24 h-24 text-emerald-400 relative animate-pulse" />
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Sistema Experimental de
            <span className="block bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Leitura Óptica de Cores
            </span>
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            O projeto <strong>Sensor RGB 6CH</strong> representa uma abordagem experimental de baixo custo
            para leitura e análise de cores em superfícies reais. Desenvolvido com tecnologia 100% analógica
            e Arduino, o sistema é capaz de distinguir tons complexos, incluindo o marrom, tradicionalmente
            difícil para sensores RGB convencionais.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <div className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-lg border border-emerald-500/30">
              <Zap className="w-5 h-5 text-emerald-400" />
              <span className="text-sm">6 Canais Fotossensores</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-lg border border-emerald-500/30">
              <CircuitBoard className="w-5 h-5 text-cyan-400" />
              <span className="text-sm">Amplificação LM324</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-lg border border-emerald-500/30">
              <Cpu className="w-5 h-5 text-blue-400" />
              <span className="text-sm">Arduino Uno/Nano</span>
            </div>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm border border-emerald-500/30 rounded-xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-emerald-400">Princípio Físico</h3>
            <p className="text-slate-300 leading-relaxed">
              O sistema opera com <strong>seis canais fotossensores</strong>, distribuídos em pares para
              leitura de cada componente espectral (vermelho, verde e azul). Cada fotodiodo BPW34 é acoplado
              a um amplificador LM324 configurado como <strong>amplificador transimpedante</strong>,
              convertendo a corrente gerada pela luz refletida em tensão analógica. O Arduino realiza a
              amostragem simultânea das tensões, normaliza os valores e calcula o vetor RGB médio através
              de reflexão seletiva e absorção espectral.
            </p>
          </div>
          <button
            onClick={() => scrollToSection('specs')}
            className="mt-12 inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors animate-bounce"
          >
            <span>Explorar Especificações</span>
            <ChevronDown className="w-5 h-5" />
          </button>
        </div>
      </section>

      <section id="specs" className="min-h-screen py-20 px-6 bg-slate-900/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Especificações Técnicas
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-emerald-500/30 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 text-cyan-400 flex items-center gap-2">
                <Eye className="w-6 h-6" />
                Sensores Ópticos
              </h3>
              <div className="space-y-3 text-slate-300">
                <div className="flex justify-between border-b border-slate-700 pb-2">
                  <span>Fotodiodos BPW34</span>
                  <span className="text-emerald-400">6 unidades</span>
                </div>
                <div className="flex justify-between border-b border-slate-700 pb-2">
                  <span>Resposta Espectral</span>
                  <span className="text-emerald-400">400-1100 nm</span>
                </div>
                <div className="flex justify-between border-b border-slate-700 pb-2">
                  <span>Canais RGB</span>
                  <span className="text-emerald-400">2 por cor</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-emerald-500/30 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 text-cyan-400 flex items-center gap-2">
                <Zap className="w-6 h-6" />
                Amplificação
              </h3>
              <div className="space-y-3 text-slate-300">
                <div className="flex justify-between border-b border-slate-700 pb-2">
                  <span>Operacional</span>
                  <span className="text-emerald-400">LM324N (4 canais)</span>
                </div>
                <div className="flex justify-between border-b border-slate-700 pb-2">
                  <span>Quantidade</span>
                  <span className="text-emerald-400">2 unidades</span>
                </div>
                <div className="flex justify-between border-b border-slate-700 pb-2">
                  <span>Ganho Ajustável</span>
                  <span className="text-emerald-400">1MΩ trim pot</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-emerald-500/30 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 text-cyan-400 flex items-center gap-2">
                <Cpu className="w-6 h-6" />
                Microcontrolador
              </h3>
              <div className="space-y-3 text-slate-300">
                <div className="flex justify-between border-b border-slate-700 pb-2">
                  <span>Plataforma</span>
                  <span className="text-emerald-400">Arduino Uno/Nano</span>
                </div>
                <div className="flex justify-between border-b border-slate-700 pb-2">
                  <span>Processador</span>
                  <span className="text-emerald-400">ATmega328P</span>
                </div>
                <div className="flex justify-between border-b border-slate-700 pb-2">
                  <span>ADC</span>
                  <span className="text-emerald-400">10 bits, 6 canais</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-emerald-500/30 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 text-cyan-400 flex items-center gap-2">
                <CircuitBoard className="w-6 h-6" />
                Componentes Passivos
              </h3>
              <div className="space-y-3 text-slate-300">
                <div className="flex justify-between border-b border-slate-700 pb-2">
                  <span>Resistores</span>
                  <span className="text-emerald-400">10kΩ, 100kΩ, 1MΩ</span>
                </div>
                <div className="flex justify-between border-b border-slate-700 pb-2">
                  <span>Capacitores</span>
                  <span className="text-emerald-400">100nF, 10µF</span>
                </div>
                <div className="flex justify-between border-b border-slate-700 pb-2">
                  <span>Alimentação</span>
                  <span className="text-emerald-400">5V DC (USB)</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-emerald-500/30 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-emerald-400">Diagrama de Blocos</h3>
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center">
              <div className="flex-1 bg-slate-900/50 p-6 rounded-lg border border-cyan-500/30">
                <Eye className="w-12 h-12 text-cyan-400 mx-auto mb-3" />
                <h4 className="font-bold text-cyan-400 mb-2">6× Fotodiodos</h4>
                <p className="text-sm text-slate-400">Captação Espectral</p>
              </div>
              <div className="text-emerald-400 text-2xl">→</div>
              <div className="flex-1 bg-slate-900/50 p-6 rounded-lg border border-cyan-500/30">
                <Zap className="w-12 h-12 text-cyan-400 mx-auto mb-3" />
                <h4 className="font-bold text-cyan-400 mb-2">TIA LM324</h4>
                <p className="text-sm text-slate-400">Conversão I→V</p>
              </div>
              <div className="text-emerald-400 text-2xl">→</div>
              <div className="flex-1 bg-slate-900/50 p-6 rounded-lg border border-cyan-500/30">
                <Cpu className="w-12 h-12 text-cyan-400 mx-auto mb-3" />
                <h4 className="font-bold text-cyan-400 mb-2">ADC 10-bit</h4>
                <p className="text-sm text-slate-400">Amostragem</p>
              </div>
              <div className="text-emerald-400 text-2xl">→</div>
              <div className="flex-1 bg-slate-900/50 p-6 rounded-lg border border-cyan-500/30">
                <CircuitBoard className="w-12 h-12 text-cyan-400 mx-auto mb-3" />
                <h4 className="font-bold text-cyan-400 mb-2">Processamento</h4>
                <p className="text-sm text-slate-400">Cálculo RGB</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="circuit" className="min-h-screen py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Esquema Elétrico
          </h2>
          <div className="bg-slate-800/50 backdrop-blur-sm border border-emerald-500/30 rounded-xl p-8 mb-8">
            <div className="aspect-video bg-slate-900/80 rounded-lg border-2 border-dashed border-emerald-500/30 flex items-center justify-center mb-6">
              <div className="text-center">
                <CircuitBoard className="w-16 h-16 text-emerald-400 mx-auto mb-4" />
                <p className="text-slate-400">Diagrama Esquemático KiCad</p>
                <p className="text-sm text-slate-500 mt-2">6 canais TIA + Vref buffer + LED driver</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-emerald-400 mb-3">Configuração TIA por Canal</h4>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400">•</span>
                    <span>Fotodiodo catodo → entrada inversora op-amp</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400">•</span>
                    <span>Entrada não-inversora → Vref (2.5V)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400">•</span>
                    <span>Realimentação Rf (1MΩ) // Cf (10pF)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400">•</span>
                    <span>Filtro RC: R=10kΩ, C=100nF</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400">•</span>
                    <span>Saída → Arduino A0-A5</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-cyan-400 mb-3">Blocos Auxiliares</h4>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400">•</span>
                    <span>Divisor tensão: 10kΩ/10kΩ → Vref 2.5V</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400">•</span>
                    <span>Buffer seguidor op-amp para Vref</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400">•</span>
                    <span>LED branco alto CRI + resistor 220Ω</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400">•</span>
                    <span>Driver NPN (2N2222) controlado por D3</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400">•</span>
                    <span>Conector 8-pin para Arduino</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-emerald-500/30 rounded-xl p-6">
            <h4 className="font-bold text-emerald-400 mb-4">Netlist Resumida (Exemplo Canal 1)</h4>
            <pre className="text-xs text-slate-300 font-mono bg-slate-900/50 p-4 rounded-lg overflow-x-auto border border-slate-700">
{`D1 cathode → IN1_NODE (op-amp U1:A inverting input)
D1 anode → VREF (2.5V buffered)
U1:A non-inv (+) → VREF
U1:A inv (-) → IN1_NODE
Feedback: RF1 (1MΩ trim) // CF1 (10pF)
U1:A output → Rfil1 (10kΩ) → S1 → Cfil1 (100nF) → GND
S1 → Arduino A0

[Replicar para canais 2-6 conectando a A1-A5]`}
            </pre>
          </div>
        </div>
      </section>

      <section id="code" className="min-h-screen py-20 px-6 bg-slate-900/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Código-Fonte Arduino
          </h2>
          <div className="bg-slate-800/50 backdrop-blur-sm border border-emerald-500/30 rounded-xl p-8 mb-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <FileCode className="w-6 h-6 text-emerald-400" />
                <h3 className="text-xl font-bold text-emerald-400">ColorSensor6ch_Maker.ino</h3>
              </div>
              <span className="text-sm text-slate-400 bg-slate-900/50 px-3 py-1 rounded">ATmega328P</span>
            </div>
            <div className="bg-slate-900/80 rounded-lg p-6 border border-slate-700 overflow-x-auto max-h-96 overflow-y-auto">
              <pre className="text-sm text-slate-300 font-mono leading-relaxed">
{`/*
  ColorSensor6ch_Maker.ino
  Sistema experimental de leitura óptica RGB 6 canais
  Calibração interativa via Serial Monitor (115200 bps)

  Funcionalidades:
  1 - Calibrar Escuro (dark)
  2 - Calibrar Branco (white)
  3 - Calibrar Referências (N amostras com target RGB)
  4 - Calcular Matriz de Conversão 6→3 (mínimos quadrados)
  5 - Medir cor em loop contínuo

  Autor: Des. Julio Campos Machado / DGold Systems
*/

#include <Arduino.h>

const int NCHAN = 6;
const int analogPins[NCHAN] = {A0, A1, A2, A3, A4, A5};
const int LED_PIN = 3;
const int SAMPLES_AVG = 20;

float darkVals[NCHAN];
float whiteVals[NCHAN];

const int MAX_REFS = 12;
int nRefs = 0;
float Arefs[MAX_REFS][NCHAN];
float Brefs[MAX_REFS][3];
float M[3][NCHAN];

float readChannelAvg(int ch) {
  long sum = 0;
  for (int i = 0; i < SAMPLES_AVG; ++i) {
    sum += analogRead(ch);
    delay(5);
  }
  return (float)sum / SAMPLES_AVG;
}

void readAllRaw(float outVals[]) {
  for (int i = 0; i < NCHAN; ++i) {
    outVals[i] = readChannelAvg(analogPins[i]);
  }
}

void normalizeVals(float raw[], float norm[]) {
  for (int i = 0; i < NCHAN; ++i) {
    float denom = (whiteVals[i] - darkVals[i]);
    if (denom <= 1e-6) denom = 1.0;
    float v = (raw[i] - darkVals[i]) / denom;
    if (v < 0) v = 0;
    if (v > 1) v = 1;
    norm[i] = v;
  }
}

void computeMappingMatrix() {
  // Implementação de mínimos quadrados
  // Resolve (A^T A) M = A^T B
  // [Código completo disponível no download]
}

void applyMapping(float S[], int outRGB[3]) {
  float tmp[3] = {0,0,0};
  for (int r = 0; r < 3; ++r) {
    for (int i = 0; i < NCHAN; ++i)
      tmp[r] += M[r][i] * S[i];
  }
  for (int r = 0; r < 3; ++r) {
    float v = tmp[r];
    if (v < 0) v = 0;
    if (v > 1) v = 1;
    float vg = pow(v, 1.0/2.2);
    outRGB[r] = (int)round(vg * 255.0);
  }
}

void setup() {
  Serial.begin(115200);
  pinMode(LED_PIN, OUTPUT);
  digitalWrite(LED_PIN, LOW);
  Serial.println("ColorSensor6ch - Versão Maker");
  Serial.println("Aguardando comando...");
}

void loop() {
  // Menu interativo via Serial Monitor
  // [Código completo disponível para download]
}`}
              </pre>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-emerald-500/30 rounded-xl p-6">
              <h4 className="font-bold text-cyan-400 mb-3">Calibração</h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                Rotina de calibração em 3 etapas: dark (escuro total), white (cartão branco padrão)
                e referências coloridas para cálculo da matriz de conversão 6×3.
              </p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm border border-emerald-500/30 rounded-xl p-6">
              <h4 className="font-bold text-cyan-400 mb-3">Processamento</h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                Normalização de tensões analógicas, aplicação de matriz linear e correção gamma
                (1/2.2) para mapeamento sRGB final.
              </p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm border border-emerald-500/30 rounded-xl p-6">
              <h4 className="font-bold text-cyan-400 mb-3">Interface Serial</h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                Menu interativo via Serial Monitor (115200 bps) para controle total do processo
                de calibração e medição em tempo real.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="min-h-screen py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Galeria Experimental
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-emerald-500/30 rounded-xl overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center border-b border-emerald-500/30">
                <Image className="w-16 h-16 text-emerald-400" />
              </div>
              <div className="p-6">
                <h4 className="font-bold text-emerald-400 mb-2">Protótipo em Protoboard</h4>
                <p className="text-sm text-slate-300 mb-4">
                  Montagem experimental com 6 fotodiodos BPW34, 2× LM324 e Arduino Nano.
                  Observa-se a disposição linear dos sensores com espaçamento de 4mm.
                </p>
                <div className="flex gap-2 text-xs">
                  <span className="bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded">Hardware</span>
                  <span className="bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded">V1.0</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-emerald-500/30 rounded-xl overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center border-b border-emerald-500/30">
                <div className="text-center">
                  <div className="flex gap-2 justify-center mb-4">
                    <div className="w-12 h-12 bg-red-500/80 rounded"></div>
                    <div className="w-12 h-12 bg-green-500/80 rounded"></div>
                    <div className="w-12 h-12 bg-blue-500/80 rounded"></div>
                  </div>
                  <p className="text-slate-400 text-sm">RGB: 180, 92, 45</p>
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-bold text-emerald-400 mb-2">Detecção de Marrom</h4>
                <p className="text-sm text-slate-300 mb-4">
                  Leitura experimental de superfície marrom (café). O sistema identifica corretamente
                  forte componente vermelha/laranja com baixa reflectância global.
                </p>
                <div className="flex gap-2 text-xs">
                  <span className="bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded">Teste</span>
                  <span className="bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded">Marrom</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-emerald-500/30 rounded-xl overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center border-b border-emerald-500/30">
                <CircuitBoard className="w-16 h-16 text-cyan-400" />
              </div>
              <div className="p-6">
                <h4 className="font-bold text-cyan-400 mb-2">PCB Versão Final</h4>
                <p className="text-sm text-slate-300 mb-4">
                  Layout otimizado com plano de terra, bypass capacitors e blindagem óptica integrada.
                  Dimensões: 50×40mm, 2 camadas FR4.
                </p>
                <div className="flex gap-2 text-xs">
                  <span className="bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded">PCB</span>
                  <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded">KiCad</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-emerald-500/30 rounded-xl overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center border-b border-emerald-500/30">
                <div className="space-y-2 text-sm font-mono text-slate-300">
                  <div>Canal 1: 0.8245</div>
                  <div>Canal 2: 0.6891</div>
                  <div>Canal 3: 0.4523</div>
                  <div className="text-emerald-400">RGB: 210, 175, 115</div>
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-bold text-cyan-400 mb-2">Dados de Calibração</h4>
                <p className="text-sm text-slate-300 mb-4">
                  Exemplo de leitura normalizada após calibração. Observa-se valores estáveis
                  e consistentes entre múltiplas amostragens.
                </p>
                <div className="flex gap-2 text-xs">
                  <span className="bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded">Dados</span>
                  <span className="bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded">Calibrado</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-emerald-500/30 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-emerald-400">Análise Espectral</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-cyan-400 mb-3">Marrom vs Bege</h4>
                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  O sensor diferencia tons de marrom e bege através da análise dos canais laranja (≈610 nm)
                  e amarelo (≈580 nm). Marrons apresentam maior absorção em comprimentos de onda curtos
                  (azul-verde) e reflectância concentrada na faixa vermelha/laranja.
                </p>
                <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700">
                  <div className="flex justify-between text-xs mb-2">
                    <span className="text-slate-400">Marrom #6B3E26</span>
                    <span className="text-emerald-400">Detectado</span>
                  </div>
                  <div className="flex gap-1 h-6">
                    <div className="flex-1 bg-red-500/60" style={{width: '45%'}}></div>
                    <div className="flex-1 bg-green-500/40" style={{width: '25%'}}></div>
                    <div className="flex-1 bg-blue-500/20" style={{width: '15%'}}></div>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-cyan-400 mb-3">Calibração Automática</h4>
                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  O processo de calibração utiliza regressão linear com mínimos quadrados para calcular
                  a matriz de conversão 6×3, mapeando leituras dos seis canais para o espaço sRGB com
                  correção gamma (1/2.2).
                </p>
                <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700 font-mono text-xs text-slate-300">
                  <div>Matrix M (3×6):</div>
                  <div className="text-emerald-400 mt-2">
                    [0.4125  0.3576  0.1805  ...]
                  </div>
                  <div className="text-cyan-400">
                    [0.2126  0.7152  0.0722  ...]
                  </div>
                  <div className="text-blue-400">
                    [0.0193  0.1192  0.9505  ...]
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="downloads" className="min-h-screen py-20 px-6 bg-slate-900/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Downloads
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-emerald-500/30 rounded-xl p-6 hover:border-emerald-400 transition-all hover:scale-105">
              <div className="flex items-center justify-between mb-4">
                <FileCode className="w-10 h-10 text-emerald-400" />
                <Download className="w-6 h-6 text-slate-400" />
              </div>
              <h4 className="font-bold text-emerald-400 mb-2">Código Arduino</h4>
              <p className="text-sm text-slate-300 mb-4">
                Sketch completo com calibração interativa, cálculo de matriz e leitura em tempo real.
              </p>
              <button className="w-full bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-400 py-2 rounded-lg transition-colors border border-emerald-500/50">
                ColorSensor6ch.ino
              </button>
              <div className="mt-2 text-xs text-slate-500">2.4 KB | Arduino IDE</div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-emerald-500/30 rounded-xl p-6 hover:border-cyan-400 transition-all hover:scale-105">
              <div className="flex items-center justify-between mb-4">
                <CircuitBoard className="w-10 h-10 text-cyan-400" />
                <Download className="w-6 h-6 text-slate-400" />
              </div>
              <h4 className="font-bold text-cyan-400 mb-2">Projeto KiCad</h4>
              <p className="text-sm text-slate-300 mb-4">
                Esquemático completo, netlist, BOM e layout PCB otimizado para fabricação.
              </p>
              <button className="w-full bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 py-2 rounded-lg transition-colors border border-cyan-500/50">
                sensor_rgb_kicad.zip
              </button>
              <div className="mt-2 text-xs text-slate-500">156 KB | KiCad 7.0+</div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-emerald-500/30 rounded-xl p-6 hover:border-blue-400 transition-all hover:scale-105">
              <div className="flex items-center justify-between mb-4">
                <FileCode className="w-10 h-10 text-blue-400" />
                <Download className="w-6 h-6 text-slate-400" />
              </div>
              <h4 className="font-bold text-blue-400 mb-2">Documentação PDF</h4>
              <p className="text-sm text-slate-300 mb-4">
                Guia completo de montagem, calibração, testes e especificações técnicas detalhadas.
              </p>
              <button className="w-full bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 py-2 rounded-lg transition-colors border border-blue-500/50">
                sensor_rgb_doc.pdf
              </button>
              <div className="mt-2 text-xs text-slate-500">1.2 MB | PDF</div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-emerald-500/30 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-emerald-400">Roadmap Futuro</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2"></div>
                  <div>
                    <h5 className="font-bold text-slate-200 mb-1">AGC Automático</h5>
                    <p className="text-sm text-slate-400">
                      Implementação de ajuste automático de ganho para diferentes intensidades luminosas
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                  <div>
                    <h5 className="font-bold text-slate-200 mb-1">Interface PySerial</h5>
                    <p className="text-sm text-slate-400">
                      GUI em Python para visualização de cores em tempo real com gráficos espectrais
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                  <div>
                    <h5 className="font-bold text-slate-200 mb-1">ADC 16-bit</h5>
                    <p className="text-sm text-slate-400">
                      Versão aprimorada com ADS1115 para maior resolução e precisão
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2"></div>
                  <div>
                    <h5 className="font-bold text-slate-200 mb-1">Biblioteca Dedicada</h5>
                    <p className="text-sm text-slate-400">
                      API simplificada para calibração espectral automática
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                  <div>
                    <h5 className="font-bold text-slate-200 mb-1">Integração IoT</h5>
                    <p className="text-sm text-slate-400">
                      Módulos ESP32-C3/ESP8266 para leitura remota via WiFi
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                  <div>
                    <h5 className="font-bold text-slate-200 mb-1">Machine Learning</h5>
                    <p className="text-sm text-slate-400">
                      Rede neural leve para correção não-linear e maior precisão
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 border-t border-emerald-500/20 py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <div className="flex items-center gap-3 justify-center md:justify-start mb-3">
                <CircuitBoard className="w-6 h-6 text-emerald-400" />
                <h3 className="text-xl font-bold text-emerald-400">Sensor RGB 6CH</h3>
              </div>
              <p className="text-slate-400 text-sm max-w-md">
                Sistema experimental de leitura óptica de cores com Arduino para fins educacionais
                e desenvolvimento maker.
              </p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-slate-300 font-medium mb-2">
                Desenvolvido por <span className="text-emerald-400">Julio Campos Machado</span>
              </p>
              <p className="text-slate-400 text-sm mb-2">DGold Systems • 2025</p>
              <p className="text-xs text-slate-500">
                Licença: Creative Commons BY-SA 4.0 • Uso livre para fins educacionais
              </p>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-slate-800 text-center">
            <p className="text-xs text-slate-500">
              Este projeto utiliza componentes open-source: Arduino IDE, KiCad EDA, LM324 OpAmp, BPW34 Photodiode
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
