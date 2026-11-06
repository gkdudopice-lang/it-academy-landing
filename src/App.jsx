import React, { useState } from "react";
import {
  Terminal,
  Sparkles,
  Send,
  X,
  BookOpen,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Users,
  Award,
  Monitor,
  Database,
} from "lucide-react";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    course: "풀스택 소프트웨어 개발자 양성과정",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setIsModalOpen(false);
      setFormData({
        name: "",
        phone: "",
        course: "풀스택 소프트웨어 개발자 양성과정",
      });
      alert("상담 신청이 정상적으로 완료되었습니다!");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#0F172A] text-slate-100 font-sans selection:bg-[#10B981] selection:text-[#0F172A]">
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-[#0F172A]/80 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#059669] to-[#10B981] flex items-center justify-center shadow-lg shadow-[#10B981]/20">
              <Terminal className="w-5 h-5 text-slate-950 font-bold" />
            </div>
            <span className="text-xl font-extrabold tracking-tight text-white">
              NEXUS <span className="text-[#10B981]">ACADEMY</span>
            </span>
          </div>
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
            <a
              href="#courses"
              className="hover:text-[#10B981] transition-colors"
            >
              교육 과정
            </a>
            <a
              href="#features"
              className="hover:text-[#10B981] transition-colors"
            >
              교육 특징
            </a>
            <a
              href="#support"
              className="hover:text-[#10B981] transition-colors"
            >
              취업 지원
            </a>
            <a
              href="#reviews"
              className="hover:text-[#10B981] transition-colors"
            >
              수강 후기
            </a>
          </nav>
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-5 py-2.5 rounded-xl bg-[#10B981] text-slate-950 font-bold text-sm hover:bg-[#059669] hover:text-white transition-all shadow-lg shadow-[#10B981]/20 flex items-center space-x-2"
          >
            <span>수강 문의하기</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-6 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#10B981]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-slate-800/80 border border-slate-700 text-[#10B981] text-xs font-semibold mb-8 shadow-inner">
            <Sparkles className="w-3.5 h-3.5" />
            <span>국비지원 100% 무료 과정 개강 확정</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-6 leading-tight">
            실무 맞춤형 코딩으로
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] to-emerald-400">
              개발자의 꿈을 현실로
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            NEXUS ACADEMY는 현업 최고의 멘토진과 함께 실무 중심의 결실 있는
            교육을 제공합니다. 기초부터 실제 기업 프로젝트 배포까지, 단 6개월
            만에 준비하세요.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#10B981] text-slate-950 font-bold hover:bg-[#059669] hover:text-white transition-all shadow-xl shadow-[#10B981]/20 flex items-center justify-center space-x-3 text-base"
            >
              <span>무료 상담 신청하기</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <a
              href="#courses"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-200 font-semibold hover:bg-slate-800 hover:border-slate-600 transition-all text-center"
            >
              과정 살펴보기
            </a>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 pt-12 border-t border-slate-800/80">
            <div className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800">
              <div className="text-3xl font-black text-[#10B981] mb-1">
                93.4%
              </div>
              <div className="text-sm text-slate-400">취업 성공률</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800">
              <div className="text-3xl font-black text-white mb-1">0원</div>
              <div className="text-sm text-slate-400">국비지원 수강료</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800">
              <div className="text-3xl font-black text-[#10B981] mb-1">1:1</div>
              <div className="text-sm text-slate-400">밀착 멘토링</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800">
              <div className="text-3xl font-black text-white mb-1">6개월</div>
              <div className="text-sm text-slate-400">집중 커리큘럼</div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section (조건 2: 최소 두 개의 과정명 노출) */}
      <section
        id="courses"
        className="py-24 px-6 bg-slate-950/50 border-y border-slate-800/80"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#10B981] mb-3">
              CURRICULUM
            </h2>
            <p className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              전문가 양성 핵심 과정
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Course 1 */}
            <div className="bg-slate-900 rounded-2xl border border-slate-800 p-8 flex flex-col justify-between hover:border-[#10B981]/50 transition-all group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#10B981]/10 border border-[#10B981]/20 flex items-center justify-center text-[#10B981] mb-6 group-hover:scale-110 transition-transform">
                  <Monitor className="w-6 h-6" />
                </div>
                <div className="inline-block px-3 py-1 rounded-md bg-[#10B981]/10 text-[#10B981] text-xs font-semibold mb-4">
                  국비지원 전액 무료
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  풀스택 소프트웨어 개발자 양성과정
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  자바(Java)와 스프링 부트(Spring Boot) 백엔드 아키텍처부터
                  리액트(React) 프론트엔드, MySQL 데이터베이스 연동까지 완성하는
                  실무 중심 통합 개발자 과정입니다.
                </p>
                <div className="space-y-2 mb-8">
                  {[
                    "Java & Object-Oriented Design",
                    "Spring Boot Architecture & JPA",
                    "React Hooks & Frontend State",
                    "MySQL Database & Query Optimization",
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center text-sm text-slate-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#10B981] mr-2.5 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <button
                onClick={() => {
                  setFormData((prev) => ({
                    ...prev,
                    course: "풀스택 소프트웨어 개발자 양성과정",
                  }));
                  setIsModalOpen(true);
                }}
                className="w-full py-3.5 rounded-xl bg-slate-800 hover:bg-[#10B981] hover:text-slate-950 font-bold text-sm transition-all text-center border border-slate-700 hover:border-transparent"
              >
                이 과정 지원하기
              </button>
            </div>

            {/* Course 2 */}
            <div className="bg-slate-900 rounded-2xl border border-slate-800 p-8 flex flex-col justify-between hover:border-[#10B981]/50 transition-all group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#10B981]/10 border border-[#10B981]/20 flex items-center justify-center text-[#10B981] mb-6 group-hover:scale-110 transition-transform">
                  <Database className="w-6 h-6" />
                </div>
                <div className="inline-block px-3 py-1 rounded-md bg-[#10B981]/10 text-[#10B981] text-xs font-semibold mb-4">
                  K-Digital Training
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  AI 머신러닝 & 빅데이터 분석가 과정
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  파이썬(Python) 기반의 데이터 전처리부터 Scikit-learn을 이용한
                  머신러닝 모델 구축, 통계적 분석 기법과 대용량 데이터
                  파이프라인 설계를 마스터합니다.
                </p>
                <div className="space-y-2 mb-8">
                  {[
                    "Python Data Analysis & Pandas",
                    "Scikit-learn Classification Models",
                    "Polynomial Feature Engineering",
                    "Cross-Validation & Data Pipelines",
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center text-sm text-slate-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#10B981] mr-2.5 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <button
                onClick={() => {
                  setFormData((prev) => ({
                    ...prev,
                    course: "AI 머신러닝 & 빅데이터 분석가 과정",
                  }));
                  setIsModalOpen(true);
                }}
                className="w-full py-3.5 rounded-xl bg-slate-800 hover:bg-[#10B981] hover:text-slate-950 font-bold text-sm transition-all text-center border border-slate-700 hover:border-transparent"
              >
                이 과정 지원하기
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#10B981] mb-3">
              WHY NEXUS
            </h2>
            <p className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              탁월한 교육 시스템과 지원
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800">
              <ShieldCheck className="w-8 h-8 text-[#10B981] mb-6" />
              <h3 className="text-xl font-bold text-white mb-3">
                현업 개발자 1:1 멘토링
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                대기업 및 유니콘 스타트업 출신 현업 멘토진이 코드 리뷰부터
                아키텍처 설계까지 밀착 지도합니다.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800">
              <Users className="w-8 h-8 text-[#10B981] mb-6" />
              <h3 className="text-xl font-bold text-white mb-3">
                실전 기업 협업 프로젝트
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                이론 학습에만 그치지 않고, 실제 기업의 서비스 요구사항을 반영한
                포트폴리오 프로젝트를 완성합니다.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800">
              <Award className="w-8 h-8 text-[#10B981] mb-6" />
              <h3 className="text-xl font-bold text-white mb-3">
                체계적인 커리어 패스
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                이력서 컨설팅, 모의 면접, 협력 기업 다이렉트 추천까지 취업에
                필요한 모든 과정을 지원합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950 py-12 px-6 text-center text-slate-500 text-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            <span className="font-bold text-white">NEXUS ACADEMY</span>
          </div>
          <p>
            © 2026 NEXUS IT Professional Training Center. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Modal Form */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl w-full max-w-md p-8 relative shadow-2xl">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <h3 className="text-2xl font-extrabold text-white mb-2">
              간편 수강 상담 신청
            </h3>
            <p className="text-sm text-slate-400 mb-6">
              전문 상담사가 빠르게 연락을 도와드립니다.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  이름
                </label>
                <input
                  type="text"
                  required
                  placeholder="홍길동"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-[#10B981] transition-colors text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  연락처
                </label>
                <input
                  type="tel"
                  required
                  placeholder="010-0000-0000"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-[#10B981] transition-colors text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  관심 과정
                </label>
                <select
                  value={formData.course}
                  onChange={(e) =>
                    setFormData({ ...formData, course: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-[#10B981] transition-colors text-sm"
                >
                  <option value="풀스택 소프트웨어 개발자 양성과정">
                    풀스택 소프트웨어 개발자 양성과정
                  </option>
                  <option value="AI 머신러닝 & 빅데이터 분석가 과정">
                    AI 머신러닝 & 빅데이터 분석가 과정
                  </option>
                </select>
              </div>
              <button
                type="submit"
                disabled={formSubmitted}
                className="w-full py-4 rounded-xl bg-[#10B981] text-slate-950 font-bold hover:bg-[#059669] hover:text-white transition-all shadow-lg shadow-[#10B981]/20 mt-2 flex items-center justify-center space-x-2"
              >
                {formSubmitted ? (
                  <span>신청 완료 중...</span>
                ) : (
                  <span>상담 신청 완료</span>
                )}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
