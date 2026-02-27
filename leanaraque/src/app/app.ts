import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="presentation-container">
        
        <!-- Header con los Logos Reales -->
        <div class="top-bar">
            <div class="logos">
                <!-- Logo Coderhouse -->
                <img src="logo coderhouse.svg" alt="Coderhouse" class="logo-coder-img">
                
                <span class="separator">x</span>
                
                <!-- Logo Bonda: Aumentado a 95px para máximo impacto visual -->
                <img src="Logo Bonda edits-negativo.png" alt="Bonda" class="logo-bonda-img">
            </div>
            <div class="author-tag">
                Lean Araque <span style="opacity: 0.5; margin: 0 5px;">|</span> Data Analytics
            </div>
        </div>

        <!-- Slide 1: Título -->
        <div class="slide" [class.active]="currentSlide === 1">
            <div class="title-slide">
                <h1>Del Estrés a la Estrategia<br><span class="text-gradient">Tu Nuevo Copiloto</span></h1>
                <p>Descubre cómo la IA transforma el ciclo de vida de los datos y cómo evitar la "Deuda Cognitiva" en tu día a día laboral.</p>
                <div style="margin-top: 60px; display: flex; justify-content: center; gap: 40px;">
                    <i class="fa-solid fa-database fa-3x" style="color: var(--bonda-light);"></i>
                    <i class="fa-solid fa-arrow-right-arrow-left fa-2x" style="color: rgba(255,255,255,0.2); margin-top: 10px;"></i>
                    <i class="fa-solid fa-robot fa-3x" style="color: var(--coder-solid);"></i>
                </div>
            </div>
        </div>

        <!-- Slide 2: Ciclo Google -->
        <div class="slide" [class.active]="currentSlide === 2">
            <span class="step-pill">El Contexto</span>
            <h2>El Ciclo de Vida de los Datos</h2>
            <div class="grid-2">
                <div>
                    <p>Para tomar decisiones brillantes no hay magia, hay método. Google define el análisis de datos en 6 fases críticas.</p>
                    <p><strong>El problema:</strong> El estrés corporativo nace cuando nos saltamos pasos (ej: exigir un gráfico sin limpiar los datos primero).</p>
                    <p><strong>La solución:</strong> La IA no reemplaza este ciclo, actúa como tu asistente en cada fase para eliminar la fricción operativa.</p>
                </div>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
                    <div class="phase-box" style="border-top-color: var(--bonda-light);">1. Ask (Preguntar)</div>
                    <div class="phase-box" style="border-top-color: var(--bonda-light);">2. Prepare (Preparar)</div>
                    <div class="phase-box" style="border-top-color: var(--coder-pink);">3. Process (Procesar)</div>
                    <div class="phase-box" style="border-top-color: var(--coder-pink);">4. Analyze (Analizar)</div>
                    <div class="phase-box" style="border-top-color: var(--coder-solid);">5. Share (Compartir)</div>
                    <div class="phase-box" style="border-top-color: var(--coder-solid);">6. Act (Actuar)</div>
                </div>
            </div>
        </div>

        <!-- Slide 3: Ask & Prepare -->
        <div class="slide" [class.active]="currentSlide === 3">
            <span class="step-pill">Fases 1 y 2</span>
            <h2>Ask & Prepare</h2>
            <div class="grid-2">
                <div class="card card-before">
                    <h3><i class="fa-solid fa-cloud-rain"></i> El Dolor (Antes)</h3>
                    <ul class="custom-list">
                        <li><i class="fa-solid fa-xmark"></i> <span><strong>Ask:</strong> Correos vagos. El analista adivina, el gerente se frustra porque "no era lo que pedí".</span></li>
                        <li><i class="fa-solid fa-xmark"></i> <span><strong>Prepare:</strong> Datos en silos. Semanas de espera para que IT cruce el Excel con el CRM.</span></li>
                    </ul>
                </div>
                <div class="card card-after">
                    <h3><i class="fa-solid fa-wand-magic-sparkles"></i> El Alivio (Con IA)</h3>
                    <ul class="custom-list">
                        <li><i class="fa-solid fa-check"></i> <span><strong>Ask:</strong> IA como frontón. <em>"¿Qué 5 métricas debo mirar para entender la rotación?"</em>.</span></li>
                        <li><i class="fa-solid fa-check"></i> <span><strong>Prepare:</strong> IA genera scripts de extracción (SQL/Python) y cruza fuentes en segundos.</span></li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- Slide 4: Process & Analyze -->
        <div class="slide" [class.active]="currentSlide === 4">
            <span class="step-pill">Fases 3 y 4</span>
            <h2>Process & Analyze</h2>
            <div class="grid-2">
                <div class="card card-before">
                    <h3><i class="fa-solid fa-triangle-exclamation"></i> El Dolor (Antes)</h3>
                    <ul class="custom-list">
                        <li><i class="fa-solid fa-xmark"></i> <span><strong>Process:</strong> El pico máximo de estrés. 80% del tiempo limpiando celdas y arreglando fórmulas.</span></li>
                        <li><i class="fa-solid fa-xmark"></i> <span><strong>Analyze:</strong> Parálisis por análisis. Mirar una tabla gigante intentando adivinar el problema.</span></li>
                    </ul>
                </div>
                <div class="card card-after">
                    <h3><i class="fa-solid fa-rocket"></i> El Alivio (Con IA)</h3>
                    <ul class="custom-list">
                        <li><i class="fa-solid fa-check"></i> <span><strong>Process:</strong> Delegar la plomería. <em>"Limpiá duplicados y unificá fechas"</em>. De 4 hs a 4 seg.</span></li>
                        <li><i class="fa-solid fa-check"></i> <span><strong>Analyze:</strong> IA como co-piloto. <em>"Identificá los 3 factores comunes de baja de clientes"</em>.</span></li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- Slide 5: Share & Act -->
        <div class="slide" [class.active]="currentSlide === 5">
            <span class="step-pill">Fases 5 y 6</span>
            <h2>Share & Act</h2>
            <div class="grid-2">
                <div class="card card-before">
                    <h3><i class="fa-solid fa-file-powerpoint"></i> El Dolor (Antes)</h3>
                    <ul class="custom-list">
                        <li><i class="fa-solid fa-xmark"></i> <span><strong>Share:</strong> PPTs estáticos. Si piden un filtro nuevo en la reunión, demora una semana más.</span></li>
                        <li><i class="fa-solid fa-xmark"></i> <span><strong>Act:</strong> Decisiones reactivas basadas en intuición o datos que llegaron demasiado tarde.</span></li>
                    </ul>
                </div>
                <div class="card card-after">
                    <h3><i class="fa-solid fa-chart-line"></i> El Alivio (Con IA)</h3>
                    <ul class="custom-list">
                        <li><i class="fa-solid fa-check"></i> <span><strong>Share:</strong> Power BI + IA. Agentes que leen el gráfico y te dan un resumen ejecutivo al instante.</span></li>
                        <li><i class="fa-solid fa-check"></i> <span><strong>Act:</strong> Pedir escenarios a la IA, pero tomar la decisión humana con confianza total.</span></li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- Slide 6: Riesgos (MIT Paper) -->
        <div class="slide" [class.active]="currentSlide === 6">
            <span class="step-pill" style="background-color: rgba(255, 99, 43, 0.15); color: var(--coder-solid);">Peligro Oculto</span>
            <h2>La Deuda Cognitiva y Técnica</h2>
            <div class="grid-2">
                <div>
                    <p>Generar análisis que no entendemos crea <strong>Deuda Técnica</strong>. Pero delegar nuestro pensamiento sistemáticamente crea algo peor: <strong>Deuda Cognitiva</strong>.</p>
                    <div class="mit-box">
                        <h3><i class="fa-solid fa-flask"></i> Estudio MIT (2024/25)</h3>
                        <p style="font-size: 1.05rem; margin-bottom: 10px; color: var(--bonda-light);"><em>"Your Brain on ChatGPT"</em></p>
                        <p style="font-size: 1rem; color: var(--bonda-white); margin-bottom: 0;">Demostró mediante EEG que delegar excesivamente el análisis a la IA <strong>reduce drásticamente la conectividad neuronal</strong> (redes de memoria y semántica).</p>
                    </div>
                </div>
                <div>
                    <ul class="custom-list">
                        <li><i class="fa-solid fa-brain" style="color: var(--bonda-light)"></i> <span><strong>Descarga Cognitiva (Offloading):</strong> Los participantes no podían recordar ni citar sus propios textos minutos después de usar IA.</span></li>
                        <li><i class="fa-solid fa-balance-scale" style="color: var(--bonda-light)"></i> <span><strong>El Equilibrio:</strong> Ahorra tiempo a corto plazo, pero atrofia el pensamiento crítico a largo plazo.</span></li>
                        <li><i class="fa-solid fa-user-shield" style="color: var(--coder-solid)"></i> <span><strong>La Regla de Oro:</strong> La IA debe hacer el trabajo pesado (Procesar), nosotros mantenemos el control estratégico (Preguntar y Actuar).</span></li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- Slide 7: Síntesis -->
        <div class="slide" [class.active]="currentSlide === 7">
            <span class="step-pill">Síntesis</span>
            <h2>Invertir la Ecuación del Tiempo</h2>
            <div class="grid-2" style="gap: 80px;">
                <div style="text-align: center;">
                    <h3 style="color: var(--bonda-light); margin-bottom: 25px; font-size: 1.5rem; font-family: 'Archivo Black', sans-serif;">Modelo Tradicional (Estrés)</h3>
                    <div class="chart-bar" style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);">
                        <div class="chart-segment" style="flex: 2; background: rgba(255,255,255,0.1); color: var(--bonda-white);">20%<br>Estrategia</div>
                        <div class="chart-segment" style="flex: 8; color: var(--bonda-light);">80%<br>Limpieza<br>Manual</div>
                    </div>
                </div>
                <div style="text-align: center;">
                    <h3 style="color: var(--coder-solid); margin-bottom: 25px; font-size: 1.5rem; font-family: 'Archivo Black', sans-serif;">Modelo IA + Humano (Bienestar)</h3>
                    <div class="chart-bar" style="box-shadow: 0 10px 30px rgba(255, 99, 43, 0.3);">
                        <div class="chart-segment" style="flex: 8; background: var(--coder-grad); color: white; font-size: 1.1rem;">80%<br>Decisión &<br>Empatía</div>
                        <div class="chart-segment" style="flex: 2; background: #FF4A89; color: white;">20%<br>IA</div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Slide 8: Cierre -->
        <div class="slide" [class.active]="currentSlide === 8">
            <div class="title-slide" style="margin-top: 50px;">
                <h2>El Verdadero Bienestar Laboral</h2>
                <p class="quote-text">"El bienestar no es solo tener beneficios fuera de la oficina, es tener las herramientas para trabajar sin frustración robótica durante tu jornada."</p>
                <p style="margin-top: 50px; font-weight: 600; font-size: 1.5rem; color: var(--bonda-white);">¿Qué tarea operativa vas a delegarle a tu copiloto de IA mañana para recuperar tu tiempo?</p>
                <div style="margin-top: 60px;">
                    <h3 class="text-gradient" style="font-size: 2.5rem; text-transform: uppercase; font-weight: 900; letter-spacing: -1px;">¡Muchas Gracias!</h3>
                    <p style="font-size: 1.1rem; margin-top: 15px; color: var(--bonda-light);">Lean Araque | Coderhouse <span class="separator">x</span> Bonda</p>
                </div>
            </div>
        </div>

        <!-- Controles -->
        <div class="controls">
            <button class="btn" [disabled]="currentSlide === 1" (click)="changeSlide(-1)">
                <i class="fa-solid fa-chevron-left"></i> Anterior
            </button>
            <div class="progress-bar">
                <div class="progress-fill" [style.width.%]="progressPercentage"></div>
            </div>
            <button class="btn" [disabled]="currentSlide === totalSlides" (click)="changeSlide(1)">
                Siguiente <i class="fa-solid fa-chevron-right"></i>
            </button>
        </div>

    </div>
  `,
  styles: [`
    :host {
      --coder-grad: linear-gradient(to right bottom, #FF4A89, #FF632B, #FFD166);
      --coder-glow: radial-gradient(circle at bottom center, rgba(255, 99, 43, 0.4) 0%, rgba(255, 74, 137, 0.15) 40%, transparent 70%);
      --coder-solid: #FF632B;
      --coder-pink: #FF4A89;
      --bonda-main: #8350F2;
      --bonda-light: #DAC9FA;
      --bonda-white: #FFFFFF;
      --bg-dark: #0B0514;
      
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      background-color: var(--bg-dark);
      color: var(--bonda-white);
      font-family: 'Plus Jakarta Sans', sans-serif;
    }

    /* Contenedor Principal */
    .presentation-container {
      width: 100vw;
      max-width: 1200px;
      height: 90vh;
      max-height: 750px;
      position: relative;
      background-color: var(--bonda-main);
      box-shadow: 0 20px 60px rgba(0,0,0,0.6);
      overflow: hidden;
      border-radius: 20px;
      display: flex;
      flex-direction: column;
    }

    .presentation-container::before {
      content: '';
      position: absolute;
      bottom: -30%;
      left: 50%;
      transform: translateX(-50%);
      width: 120%;
      height: 80%;
      background: var(--coder-glow);
      filter: blur(40px);
      z-index: 0;
      pointer-events: none;
    }

    /* Top Bar */
    .top-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 25px 50px;
      background: rgba(11, 5, 20, 0.15);
      backdrop-filter: blur(10px);
      z-index: 10;
      border-bottom: 1px solid rgba(255,255,255,0.05);
    }

    .logos {
      display: flex;
      align-items: center;
      gap: 30px; 
    }

    /* Tamaños de las imágenes - Optimizados para balance */
    .logo-coder-img { 
      height: 42px; 
      width: auto; 
      display: block; 
      object-fit: contain; 
    }
    
    .logo-bonda-img { 
      height: 95px; /* Tamaño máximo para que resalte frente a Coderhouse */
      width: auto; 
      display: block; 
      object-fit: contain;
    }

    .separator {
      color: var(--coder-solid);
      font-weight: 800;
      font-size: 26px;
      font-family: 'Plus Jakarta Sans', sans-serif;
    }

    .author-tag {
      font-size: 0.95rem;
      color: var(--bonda-light);
      font-weight: 600;
    }

    /* Slides Lógica */
    .slide {
      display: none;
      flex: 1;
      padding: 40px 60px;
      animation: fadeIn 0.5s ease-in-out;
      overflow-y: auto;
      position: relative;
      z-index: 1;
    }

    .slide.active {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(15px); }
      to { opacity: 1; transform: translateY(0); }
    }

    /* Tipografía */
    h1, h2, h3 { font-family: 'Archivo Black', sans-serif; font-weight: 400; }
    
    h1 {
      font-size: 4rem;
      line-height: 0.95;
      letter-spacing: -2px;
      text-transform: uppercase;
      margin-bottom: 25px;
    }

    .text-gradient {
      background: var(--coder-grad);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      display: inline-block;
    }

    h2 {
      font-size: 2.8rem;
      letter-spacing: -1px;
      margin-bottom: 30px;
      color: var(--bonda-white);
      text-transform: uppercase;
    }

    p {
      font-size: 1.25rem;
      line-height: 1.6;
      color: var(--bonda-light);
      margin-bottom: 20px;
      font-weight: 400;
    }

    /* Layouts y Tarjetas */
    .grid-2 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 40px;
      align-items: center;
    }

    .card {
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid rgba(255, 255, 255, 0.08);
      backdrop-filter: blur(10px);
      border-radius: 16px;
      padding: 35px;
      transition: transform 0.3s ease, border-color 0.3s ease;
    }

    .card:hover {
      transform: translateY(-5px);
      border-color: rgba(255, 255, 255, 0.2);
    }

    .card h3 {
      color: var(--bonda-white);
      margin-bottom: 20px;
      font-size: 1.6rem;
      display: flex;
      align-items: center;
      gap: 12px;
      letter-spacing: -0.5px;
    }

    .card-before h3 i { color: var(--bonda-light); }
    .card-after {
      background: linear-gradient(180deg, rgba(255, 99, 43, 0.08) 0%, rgba(255, 255, 255, 0.03) 100%);
      border: 1px solid rgba(255, 99, 43, 0.3);
    }
    .card-after h3 { color: var(--coder-solid); }

    .step-pill {
      display: inline-block;
      padding: 6px 18px;
      background: rgba(218, 201, 250, 0.15);
      border-radius: 30px;
      font-size: 0.9rem;
      text-transform: uppercase;
      letter-spacing: 1.5px;
      margin-bottom: 20px;
      color: var(--bonda-white);
      font-weight: 800;
    }

    /* Cajas y Elementos Específicos */
    .phase-box {
      background: rgba(255,255,255,0.05);
      padding: 20px;
      border-radius: 12px;
      font-weight: 600;
      border-top: 3px solid;
    }

    .title-slide { text-align: center; }
    .title-slide p { font-size: 1.4rem; max-width: 800px; margin: 0 auto; color: var(--bonda-light); }

    .mit-box {
      background: rgba(0, 0, 0, 0.25);
      border: 1px solid var(--coder-solid);
      padding: 30px;
      border-radius: 16px;
      margin-top: 20px;
      position: relative;
      overflow: hidden;
    }
    .mit-box::before {
      content: '';
      position: absolute;
      top: 0; left: 0; width: 100%; height: 4px;
      background: var(--coder-solid);
    }
    .mit-box h3 { color: var(--coder-solid); letter-spacing: -0.5px; }

    .quote-text {
      font-style: italic;
      font-size: 1.4rem;
      border-left: 4px solid var(--coder-solid);
      padding-left: 25px;
      margin: 30px 0;
      color: var(--bonda-white);
      font-weight: 500;
    }

    ul.custom-list { list-style: none; margin-bottom: 20px; padding: 0;}
    ul.custom-list li {
      font-size: 1.15rem;
      color: var(--bonda-light);
      margin-bottom: 18px;
      display: flex;
      align-items: flex-start;
      gap: 15px;
    }
    ul.custom-list li strong { color: var(--bonda-white); }
    .card-before ul.custom-list li i { color: var(--bonda-light); margin-top: 4px; }
    .card-after ul.custom-list li i { color: var(--coder-solid); margin-top: 4px; }

    .chart-bar {
      display: flex;
      height: 350px;
      width: 120px;
      margin: 0 auto;
      border-radius: 60px;
      overflow: hidden;
      flex-direction: column;
    }
    .chart-segment {
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 800;
      text-align: center;
      padding: 10px;
    }

    /* Controles de Navegación */
    .controls {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 25px 50px;
      background: rgba(0, 0, 0, 0.15);
      z-index: 10;
      position: relative;
    }

    .progress-bar {
      flex: 1;
      height: 6px;
      background: rgba(255,255,255,0.1);
      margin: 0 40px;
      border-radius: 3px;
      overflow: hidden;
    }

    .progress-fill {
      height: 100%;
      background: var(--coder-solid);
      transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .btn {
      background: var(--coder-solid);
      color: white;
      border: none;
      padding: 12px 28px;
      border-radius: 30px; /* Pill shape */
      font-size: 1.05rem;
      font-weight: 800;
      cursor: pointer;
      font-family: 'Plus Jakarta Sans', sans-serif;
      transition: transform 0.2s, box-shadow 0.2s;
      display: flex;
      align-items: center;
      gap: 10px;
      box-shadow: 0 4px 15px rgba(255, 99, 43, 0.3);
    }

    .btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(255, 99, 43, 0.4);
    }
    .btn:active { transform: translateY(1px); }
    .btn:disabled {
      background: rgba(255,255,255,0.1);
      color: rgba(255,255,255,0.3);
      box-shadow: none;
      cursor: not-allowed;
      transform: none;
    }
  `]
})
export class App {
  currentSlide = 1;
  totalSlides = 8;

  get progressPercentage(): number {
    return ((this.currentSlide - 1) / (this.totalSlides - 1)) * 100;
  }

  changeSlide(direction: number): void {
    this.currentSlide += direction;
    if (this.currentSlide < 1) this.currentSlide = 1;
    if (this.currentSlide > this.totalSlides) this.currentSlide = this.totalSlides;
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent): void {
    if (event.key === 'ArrowRight' || event.key === 'Space') {
      if (this.currentSlide < this.totalSlides) {
        this.changeSlide(1);
      }
    } else if (event.key === 'ArrowLeft') {
      if (this.currentSlide > 1) {
        this.changeSlide(-1);
      }
    }
  }
}