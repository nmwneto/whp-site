'use client';

import { useRef } from 'react';
import FadeIn from '@/components/FadeIn';
import { useTranslation } from '@/i18n/LanguageContext';

type ServiceKey = 'brandIdentity' | 'webDesign' | 'seoContent' | 'socialMedia' | 'customProjects';

const OPEN_MS = 320;
const CLOSE_MS = 240;
/** Saída suave (ease-out expo) na abertura; entrada mais seca no fechamento. */
const OPEN_EASING = 'cubic-bezier(0.22, 1, 0.36, 1)';
const CLOSE_EASING = 'cubic-bezier(0.4, 0, 0.68, 0.06)';

/**
 * Um item do acordeão.
 *
 * O <details> nativo abre e fecha instantaneamente, então interceptamos o clique
 * no <summary> e animamos a altura do bloco de resposta com a Web Animations API.
 * O atributo `open` continua sendo alternado de verdade — só que no início da
 * abertura e no fim do fechamento — para que o conteúdo siga presente no DOM e
 * o comportamento nativo (Ctrl+F, leitores de tela) não se perca.
 */
function FaqItem({ question, answer, accent }: { question: string; answer: string; accent: string }) {
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const animation = useRef<Animation | null>(null);
  /** True enquanto a animação de fechamento roda — nesse intervalo `open` ainda é true. */
  const closing = useRef(false);

  function handleToggle(event: React.MouseEvent<HTMLElement>) {
    const details = detailsRef.current;
    const content = contentRef.current;
    if (!details || !content) return;

    // Deixa o <details> nativo agir sozinho para quem pediu menos movimento.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    event.preventDefault();

    animation.current?.cancel();
    animation.current = null;

    // Se estava fechando, um novo clique significa "reabrir".
    const shouldOpen = closing.current || !details.open;
    closing.current = false;

    if (shouldOpen) {
      details.open = true;
      details.classList.remove('faq-item--closing');
      const height = content.scrollHeight;
      animation.current = content.animate(
        [
          { height: '0px', opacity: 0 },
          { height: `${height}px`, opacity: 1 },
        ],
        { duration: OPEN_MS, easing: OPEN_EASING },
      );
      animation.current.onfinish = () => {
        animation.current = null;
      };
      return;
    }

    closing.current = true;
    details.classList.add('faq-item--closing');
    const height = content.scrollHeight;
    animation.current = content.animate(
      [
        { height: `${height}px`, opacity: 1 },
        { height: '0px', opacity: 0 },
      ],
      { duration: CLOSE_MS, easing: CLOSE_EASING },
    );
    animation.current.onfinish = () => {
      details.open = false;
      details.classList.remove('faq-item--closing');
      closing.current = false;
      animation.current = null;
    };
  }

  return (
    <details ref={detailsRef} className="faq-item">
      <summary className="faq-item__summary" onClick={handleToggle}>
        {question}
        <span aria-hidden="true" className="faq-item__marker" style={{ color: accent }}>
          +
        </span>
      </summary>
      <div ref={contentRef} className="faq-item__content">
        <p className="faq-item__answer">{answer}</p>
      </div>
    </details>
  );
}

/**
 * Bloco de perguntas frequentes das páginas de serviço.
 *
 * Usa <details>/<summary> nativos em vez de um acordeão controlado por estado:
 * a resposta fica no HTML mesmo com o item fechado, então crawlers e leitores de
 * tela leem o conteúdo completo — que é justamente o que o FAQPage do JSON-LD
 * (montado em lib/schema.ts a partir das mesmas strings) declara existir na página.
 */
export default function ServiceFaq({ service, accent }: { service: ServiceKey; accent: string }) {
  const { t } = useTranslation();
  const { faq } = t.servicePages[service];
  const common = t.servicePages.common;

  return (
    <section
      style={{
        background: '#0a0a0a',
        padding: '5rem 4rem',
        borderTop: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <div className="mx-auto max-w-[800px]">
        <FadeIn>
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <p
              className="text-[0.75rem] font-semibold uppercase tracking-[0.2em]"
              style={{ color: '#86868b', marginBottom: '1rem' }}
            >
              {common.faqLabel}
            </p>
            <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold tracking-[-0.03em] text-white">
              {common.faqTitle}
            </h2>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {faq.map((item) => (
              <FaqItem key={item.question} question={item.question} answer={item.answer} accent={accent} />
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
