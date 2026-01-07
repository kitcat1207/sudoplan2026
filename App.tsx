import React from 'react';
import { 
  ShieldCheck, 
  BrainCircuit, 
  Users, 
  Settings, 
  Rocket, 
  Globe, 
  Cpu, 
  Zap, 
  FileText,
  Briefcase,
  Search,
  MessageSquare,
  Wrench,
  Clock,
  ArrowRight,
  ChevronRight,
  Activity,
  Target,
  BarChart3,
  Layers
} from 'lucide-react';

// --- Components ---

const SectionTitle: React.FC<{ title: string; subtitle?: string }> = ({ title, subtitle }) => (
  <div className="mb-20">
    <div className="flex items-center gap-4 mb-2">
      <div className="h-1 w-12 bg-slate-900"></div>
      {subtitle && (
        <span className="text-slate-400 text-sm font-bold tracking-[0.3em] uppercase">
          {subtitle}
        </span>
      )}
    </div>
    <h2 className="text-4xl font-bold text-slate-900 tracking-tight">
      {title}
    </h2>
  </div>
);

const Card: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode; className?: string; tag?: string }> = ({ icon, title, children, className, tag }) => (
  <div className={`p-10 rounded-sm bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300 relative ${className}`}>
    <div className="flex items-start justify-between mb-8">
      <div className="text-slate-900">
        {icon}
      </div>
      <div className="flex flex-col items-end gap-2">
        <div className="text-[10px] font-bold text-slate-300 tracking-widest uppercase">Proprietary</div>
        {tag && (
          <div className="px-2 py-0.5 bg-red-50 border border-red-100 text-[10px] font-bold text-red-600 uppercase tracking-tighter">
            {tag}
          </div>
        )}
      </div>
    </div>
    <h3 className="text-2xl font-bold text-slate-900 mb-6 tracking-tight">{title}</h3>
    <div className="text-slate-600 leading-relaxed text-[15px]">
      {children}
    </div>
  </div>
);

const TimelineCard: React.FC<{ 
  quarter: string; 
  tag: string;
  title: string; 
  items: string[]; 
  side: 'left' | 'right';
  icon: React.ReactNode;
}> = ({ quarter, tag, title, items, side, icon }) => (
  <div className={`relative mb-24 flex flex-col md:flex-row items-stretch w-full group`}>
    <div className={`w-full md:w-1/2 ${side === 'right' ? 'md:order-last md:pl-16' : 'md:pr-16 md:text-right'}`}>
      <div className="p-8 md:p-12 bg-white border border-slate-200 border-l-4 border-l-slate-900 shadow-sm transition-all duration-500">
        <div className={`inline-block px-3 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold uppercase tracking-widest mb-6`}>
          Phase {quarter} / {tag}
        </div>
        <h4 className="text-2xl font-bold text-slate-900 mb-8 leading-tight">{title}</h4>
        <div className={`space-y-6 text-[15px] text-slate-600 text-left`}>
          {items.map((item, idx) => {
            const [boldPart, ...rest] = item.split('：');
            return (
              <div key={idx} className="flex items-start">
                <div className="mt-2 mr-3 w-1.5 h-1.5 bg-slate-900 flex-shrink-0" />
                <p className="leading-relaxed">
                  <span className="font-bold text-slate-900">{boldPart}</span>
                  {rest.length > 0 ? <span className="text-slate-600">：{rest.join('：')}</span> : ''}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>

    <div className="hidden md:flex absolute left-1/2 top-0 bottom-0 -translate-x-1/2 flex-col items-center z-10">
      <div className="w-12 h-12 bg-slate-900 text-white flex items-center justify-center font-bold text-lg shadow-xl">
        {quarter}
      </div>
      <div className="w-px h-full bg-slate-200"></div>
    </div>
    
    <div className="hidden md:block w-1/2"></div>
  </div>
);

// --- Main App ---

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F8F9FA] font-sans text-slate-900 antialiased selection:bg-slate-900 selection:text-white">
      {/* Structural Background */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden opacity-[0.03]">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      </div>

      {/* Header Section */}
      <header className="relative pt-32 pb-40 px-6 border-b border-slate-200 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="inline-flex items-center px-3 py-1 border border-slate-900 text-slate-900 text-[10px] font-bold tracking-[0.4em] uppercase mb-12">
            Internal Strategy Document
          </div>
          
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-8">
              <h1 className="text-6xl md:text-8xl font-bold text-slate-900 mb-10 tracking-tighter leading-[0.95]">
                瑞华云数豆科技 <br/> 
                <span className="text-[#39679B]">2026年发展战略规划书</span>
              </h1>
              <p className="text-2xl text-slate-500 font-light leading-relaxed max-w-2xl border-l-2 border-slate-200 pl-8">
                构建“基础设施+智慧大脑+交互服务+敏捷工具”四维合规生态
              </p>
            </div>
            
            <div className="lg:col-span-4 p-8 border border-slate-200 rounded-sm">
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">制定人</span>
                  <span className="text-sm font-bold text-slate-900">施奕勇</span>
                </div>
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">发布日期</span>
                  <span className="text-sm font-bold text-slate-900">2026年1月</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">保密级别</span>
                  <span className="text-sm font-bold text-slate-900">Confidential</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-32">
            <div className="p-10 bg-slate-50 border-l-2 border-slate-900">
              <div className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-4">Vision</div>
              <p className="text-xl font-bold text-slate-900 leading-tight">助力中国企业出海更轻、更快、更稳。</p>
            </div>
            <div className="p-10 bg-slate-50 border-l-2 border-slate-900">
              <div className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-4">Philosophy</div>
              <p className="text-xl font-bold text-slate-900 leading-tight">全面 AI 化 (AI-Native) + Vibe Coding (极速生产)。</p>
            </div>
            <div className="p-10 bg-slate-50 border-l-2 border-slate-900">
              <div className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-4">Positioning</div>
              <p className="text-xl font-bold text-slate-900 leading-tight">国内领先财务 AI 科技公司，提供一站式全球财税合规数智化平台。</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-32 space-y-48">
        
        {/* Section 1: Product Route */}
        <section id="product">
          <SectionTitle 
            title="一、 产品路线：四层架构协同进化" 
            subtitle="The Quad-Core Product Matrix" 
          />
          <div className="mb-20">
            <p className="text-2xl text-slate-600 leading-relaxed font-light">
              我们将产品战略重构为 “基础设施 (Body) + 智慧大脑 (Brain) + 交互服务 (Interface) + 敏捷工具 (Tools)” 的四维有机架构。前三者构成核心护城护，第四层作为生态触手。
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card icon={<Cpu size={32} />} title="1. 基础设施层 (Infrastructure)">
              <p className="font-bold text-slate-900 mb-6 text-lg border-b border-slate-100 pb-2">出海企业财税合规数智化平台</p>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="w-1 h-1 bg-slate-900 mt-2.5 flex-shrink-0"></div>
                  <p><strong>定位</strong> ：企业的“数字躯干”，承载全球业务流与数据流。</p>
                </li>
                <li className="flex gap-4">
                  <div className="w-1 h-1 bg-slate-900 mt-2.5 flex-shrink-0"></div>
                  <p><strong>核心底座</strong> ： Deep Odoo 19 + AI Core 。基于 Odoo 19 内核进行深度改造，不仅是ERP，更是全球化合规的容器。</p>
                </li>
                <li className="pt-4">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">关键模块</div>
                  <div className="space-y-4">
                    <div className="p-6 bg-slate-50 border border-slate-100">
                      <strong>○ 全球化合规引擎</strong> ：预置 100+ 国家（重点覆盖一带一路、拉美、东南亚）的税务逻辑（VAT/GST/Sales Tax）。支持 CAS/IFRS 多准则实时并行与自动对账。
                    </div>
                    <div className="p-6 bg-slate-50 border border-slate-100">
                      <strong>○ AI 驱动智能财务</strong> ：集成 OCR 与 LLM，实现“发票即凭证”。从采购到付款全流程自动化（RPA），目标是将去人工化记账率提升至 80% 以上 。
                    </div>
                    <div className="p-6 bg-slate-50 border border-slate-100">
                      <strong>○ 海外综合服务平台</strong> ：灵活配置，支持集团级报表合并与穿透式审计，解决跨境资金流结算与避险预警。
                    </div>
                  </div>
                </li>
              </ul>
            </Card>

            <Card icon={<BrainCircuit size={32} />} title="2. 智慧大脑层 (Smart Brain)">
              <p className="font-bold text-slate-900 mb-6 text-lg border-b border-slate-100 pb-2">全球财税知识库</p>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="w-1 h-1 bg-slate-900 mt-2.5 flex-shrink-0"></div>
                  <p><strong>定位</strong> ：企业的“超级大脑”，确立专业壁垒与推理能力。</p>
                </li>
                <li className="flex gap-4">
                  <div className="w-1 h-1 bg-slate-900 mt-2.5 flex-shrink-0"></div>
                  <p><strong>技术核心</strong> ： <strong>GraphRAG (图谱增强检索)</strong> 。超越简单的文档检索，利用“向量+图谱”技术识别法规间的隐性冲突，精准定位双边税收协定 (DTAAs) 的优先权。</p>
                </li>
                <li className="pt-4">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">数据体系 (三层级)</div>
                  <div className="flex gap-4 mb-8">
                    {['L1 法定法规', 'L2 双边协定', 'L3 行业实务'].map(level => (
                      <span key={level} className="text-xs font-bold px-3 py-1 bg-slate-900 text-white">{level}</span>
                    ))}
                  </div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">安全机制</div>
                  <div className="p-6 bg-slate-900 text-slate-300">
                    <strong>○ PII 隐私脱敏引擎</strong> ：在数据进入大模型前，自动识别并隔离人名、账号等敏感信息，确保原始合规数据“可用不可见”，安全不出境。
                  </div>
                </li>
              </ul>
            </Card>

            <Card icon={<MessageSquare size={32} />} title="3. 交互服务层 (Interactive Service)">
              <p className="font-bold text-slate-900 mb-6 text-lg border-b border-slate-100 pb-2">瑞华云营销合规智能体 (Digital Partner)</p>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="w-1 h-1 bg-slate-900 mt-2.5 flex-shrink-0"></div>
                  <p><strong>定位</strong> ：企业的“有温度的数字合伙人”，连接大客户与底座的深度智能界面。</p>
                </li>
                <li className="flex gap-4">
                  <div className="w-1 h-1 bg-slate-900 mt-2.5 flex-shrink-0"></div>
                  <p><strong>核心产品</strong> ： <strong>Ruihua Digital Consultant ( 瑞华云营销合规智能体 )</strong> 。</p>
                </li>
                <li className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                  <div className="p-6 border border-slate-200 bg-white shadow-sm">
                    <div className="text-[10px] font-bold text-slate-400 mb-2 uppercase">Cognitive Core</div>
                    <div className="font-bold text-slate-900 mb-2">认知内核 (IQ)</div>
                    <p className="text-xs text-slate-500">基于 GraphRAG，提供经得起 IPO 审计级的专业建议，杜绝“幻觉”。</p>
                  </div>
                  <div className="p-6 border border-slate-200 bg-slate-900 text-white shadow-sm">
                    <div className="text-[10px] font-bold text-slate-500 mb-2 uppercase">Empathy Core</div>
                    <div className="font-bold text-white mb-2">情感内核 (EQ)</div>
                    <p className="text-xs text-slate-400">复刻资深合伙人人格。识别客户控制权焦虑与合规恐慌。</p>
                  </div>
                </li>
                <li className="pt-4">
                   <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">关键能力</div>
                   <div className="space-y-4 text-sm">
                     <p className="pb-3 border-b border-slate-100">○ <strong>SPIN 销售/咨询逻辑</strong> ：通过 S-P-I-N (情境-问题-暗示-需求) 方法论，主动引导客户发现合规风险。</p>
                     <p className="pb-3 border-b border-slate-100">○ <strong>多模态交互</strong> ：支持语音识别 (ASR) 和企业微信 (WeCom) 侧边栏运行，实现人机协同销售。</p>
                     <p className="pb-3">○ <strong>主动合规前哨</strong> ：根据海外政策异动（如“墨西哥电子发票新规”），主动推送个性化缓解方案。</p>
                   </div>
                </li>
              </ul>
            </Card>

            <Card icon={<Settings size={32} />} title="4. 敏捷工具箱 (Agile Toolbox)">
              <p className="font-bold text-slate-900 mb-6 text-lg border-b border-slate-100 pb-2">卫星产品矩阵</p>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="w-1 h-1 bg-slate-900 mt-2.5 flex-shrink-0"></div>
                  <p><strong>定位</strong> ：公司的“触手”，解决单点痛点，低成本获客，支持独立 SaaS 售卖。</p>
                </li>
                <li className="flex gap-4">
                  <div className="w-1 h-1 bg-slate-900 mt-2.5 flex-shrink-0"></div>
                  <p><strong>策略</strong> ： “可插拔、可独立” 。既能无缝集成到底座，也能作为流量入口。</p>
                </li>
                <li className="pt-4">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">核心组件举例</div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4 p-4 border border-slate-100">
                      <Wrench size={18} className="mt-1 text-slate-900" />
                      <p className="text-sm"><strong>Docu-AI 票据解析Agent</strong> ：攻克东南亚/拉美手写及非标票据识别难题，吸纳小微客户。</p>
                    </div>
                    <div className="flex items-start gap-4 p-4 border border-slate-100">
                      <ShieldCheck size={18} className="mt-1 text-slate-900" />
                      <p className="text-sm"><strong>Risk-Scanner 合规扫描哨兵</strong> ：自动对照知识库扫描潜在税务风险。</p>
                    </div>
                    <div className="flex items-start gap-4 p-4 border border-slate-100">
                      <Activity size={18} className="mt-1 text-slate-900" />
                      <p className="text-sm"><strong>Auto-Filing 一键申报器</strong> ：针对 API 成熟国家的自动化申报工具，实现“连接即申报”。</p>
                    </div>
                  </div>
                </li>
              </ul>
            </Card>
          </div>
        </section>

        {/* Section 2: Technical Route */}
        <section id="tech">
          <SectionTitle 
            title="二、 技术路线：Vibe Coding 与 GraphRAG 双轮驱动" 
          />
          <div className="space-y-24">
            <div className="p-12 md:p-16 bg-white border border-slate-200">
              <div className="flex flex-col md:flex-row gap-12 items-start">
                <div className="w-20 h-20 bg-slate-900 text-white flex items-center justify-center flex-shrink-0">
                  <Zap size={40} />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-6">1. 研发模式变革：全面拥抱 Vibe Coding (AI-First)</h3>
                  <p className="text-xl text-slate-500 mb-12 max-w-4xl font-light">
                    告别传统以“代码行数”或“工时”为度量的软件工程，构建以 “意图（Intent）到产品（Product）的转化速度” 为唯一核心指标的极速研发体系。
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-slate-100 pt-12">
                    <div>
                      <h4 className="font-bold text-slate-900 mb-4">核心理念与工具链重构</h4>
                      <ul className="text-sm space-y-4 text-slate-500">
                        <li>• <strong>角色转变</strong> ：开发者从编写字符的“泥瓦匠”转变为Prompting & Reviewing的“建筑师”与“验收官”。</li>
                        <li>• <strong>AI Native 工具链</strong> ：抛弃传统编辑器，统一部署 Cursor 或 Claude 等辅助编程工具。</li>
                        <li>• <strong>原型革命</strong> ：前端禁止手写起步，必须使用最先进的工具或模型生成高保真原型。</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-4">战略价值</h4>
                      <ul className="text-sm space-y-4 text-slate-500">
                        <li>• <strong>极速 TTM (Time-to-Market)</strong> ：MVP 验证周期从 2 周缩短至 2 天甚至 4 小时，快 5 倍。</li>
                        <li>• <strong>降低技术负债</strong> ：AI 强制执行代码规范，重构老旧代码，保持高度一致性。</li>
                        <li>• <strong>人才密度质质变</strong> ：抹平全栈门槛，新员工即刻上手。</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-4">实施路线图 (6个月彻底转型)</h4>
                      <ul className="text-sm space-y-4 text-slate-500">
                        <li>• <strong>Phase 1 工具升级</strong> ：IDE 切换至 Cursor/ Claude Code 等。</li>
                        <li>• <strong>Phase 2 流程重塑</strong> ：推行 AI TDD（测试驱动），先生成用例再生成代码。</li>
                        <li>• <strong>Phase 3 全面落地</strong> ：建立企业级代码向量库 (RAG)。</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
               <Card icon={<Search size={28} />} title="GraphRAG 知识图谱构建" tag="技术难点">
                 <ul className="space-y-6">
                   <li className="flex gap-4">
                     <div className="w-1.5 h-1.5 bg-slate-900 mt-2 flex-shrink-0"></div>
                     <p>建立 “法规-实体-案例” 的知识图谱，解决法律条文之间逻辑互斥的难题。</p>
                   </li>
                   <li className="flex gap-4">
                     <div className="w-1.5 h-1.5 bg-slate-900 mt-2 flex-shrink-0"></div>
                     <p>引入 <strong>BGE-M3 模型</strong> 消除语言鸿沟，实现多语种法条实时映射。</p>
                   </li>
                 </ul>
               </Card>
               <Card icon={<ShieldCheck size={28} />} title="平台底座与知识库、智能体无缝集成" tag="技术难点">
                 <ul className="space-y-6">
                   {/* 此卡片内容按用户要求清空具体文字描述，仅保留结构 */}
                 </ul>
               </Card>
            </div>
          </div>
        </section>

        {/* Section 3: Talent Route */}
        <section id="talent">
          <SectionTitle 
            title="三、 人才路线：构建“AI Native + 领域专家”精英特种部队" 
          />
          <div className="mb-20">
            <p className="text-2xl text-slate-900 font-light leading-relaxed max-w-5xl">
              2026年的人才战略将彻底告别“螺丝钉”模式，全面转向寻找具备“AI 杠杆率”的跨界人才。我们需要构建一支“懂技术、懂业务、懂产品”的专业团队。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <Rocket size={32} />,
                title: "1. AI Native 产品工程师",
                subtitle: "The Product-Minded AI Engineer",
                desc: "公司的“创新引擎”，Vibe Coding 的践行者。",
                detail: "• 极客精神 ：热爱并善用AI 技术，掌握 Cursor 等前沿工具。\n• 产品思维 ：不仅写代码，更关注“用户体验”与“商业价值”。能独立完成全栈落地的闭环。",
                duty: "负责“敏捷工具箱”的快速孵化与“交互服务层”的体验打磨，以 10 倍速推进 MVP 验证。"
              },
              {
                icon: <BrainCircuit size={32} />,
                title: "2. 知识工程专家",
                subtitle: "Knowledge Engineering Expert",
                desc: "公司的“智慧构建者”，GraphRAG 的架构师。",
                detail: "• 领域深耕 ：精通 NLP（自然语言处理）与 Knowledge Graph 技术。\n• 逻辑严密 ：将晦涩的跨国财税法规，转化为计算机可推理的数据。",
                duty: "构建“出海财税知识库”，解决大模型幻觉问题，确保每一条合规建议的准确性。"
              },
              {
                icon: <Briefcase size={32} />,
                title: "3. Odoo + 财税复合型专家",
                subtitle: "Odoo & Finance Composite Expert",
                desc: "公司的“稳健底座”，连接技术与业务的桥梁。",
                detail: "• 跨界融合 ：既是 Odoo 专家，又具备扎实的财务/税务背景。\n• 工具赋能 ：擅长利用 AI 工具生成和审查 Odoo 模块代码。",
                duty: "负责“基础设施层”的深度定制。确保 Odoo 底座严格符合各国会计准则 (COA) 和合规要求。"
              }
            ].map((talent, i) => (
              <div key={i} className="flex flex-col h-full bg-white border border-slate-200 p-10 hover:border-slate-400 transition-colors duration-300">
                <div className="text-slate-900 mb-8">{talent.icon}</div>
                <h4 className="text-xl font-bold text-slate-900 mb-1">{talent.title}</h4>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-10">{talent.subtitle}</p>
                <div className="space-y-8 text-[14px] text-slate-600 flex-grow">
                  <div>
                    <span className="font-bold text-slate-900 block mb-2 text-[10px] uppercase tracking-wider">定位</span>
                    {talent.desc}
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block mb-2 text-[10px] uppercase tracking-wider">人才画像</span>
                    <p className="whitespace-pre-line leading-relaxed">{talent.detail}</p>
                  </div>
                  <div className="pt-8 border-t border-slate-100">
                    <span className="font-bold text-slate-900 block mb-2 text-[10px] uppercase tracking-wider">核心职责</span>
                    <p className="leading-relaxed font-medium">{talent.duty}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Implementation Schedule - Vertical Timeline */}
        <section id="schedule" className="relative">
          <SectionTitle 
            title="四、 2026年实施时间计划表" 
          />
          
          <div className="relative max-w-5xl mx-auto pt-20">
            <div className="flex flex-col">
              <TimelineCard 
                quarter="Q1" 
                tag="筑基期"
                icon={<Activity />}
                title="Foundation & Pilot —— 平台上线与单点突破"
                side="left"
                items={[
                  "1. Odoo 19 基础版验证 ：发布基于 Odoo 19 的出海企业财税合规数智化平台基础版，打通“采购-销售-库存-财务”核心流程，实现财务流程管理的初步闭环。",
                  "2. 新加坡 RAG 知识库 (MVP) ：以新加坡为试点，跑通知识库建设全链路（数据获取 -> 清洗 -> 建模 -> 存储 -> 检索 -> 分析）。解决多语言混合、法规结构化等技术难题，验证可行性并形成快速落地方案 (SOP)。",
                  "3. 瑞华云通用知识库 ：汇聚瑞华云内部业务数据、SOP、通用法律法规及专家知识，为未来的个性化建议与智能体构建奠定基石。",
                  "4. 精英招募 ：完成 AI Native 开发人才（Vibe Coding 实践者）与具备 Odoo 经验的财务技术人才的核心岗位招聘。"
                ]}
              />

              <TimelineCard 
                quarter="Q2" 
                tag="验证期"
                icon={<Target />}
                title="Validation & Expansion —— 多国复制与智能体雏形"
                side="right"
                items={[
                  "1. 平台优化与试点 ：完善数智化平台基础功能，挑选 2-3 家真实国内客户 进行深度试点（POC），收集反馈并迭代。",
                  "2. 多国知识库复制 ：基于新加坡经验，利用现有客户的真实业务场景，快速搭建 泰国、墨西哥、俄罗斯 三个关键出海目的地的财税合规知识库。",
                  "3. 智能体 v0.1 (Alpha) ：开发“瑞华云合规智能体（数字合伙人）” 0.1 版本。",
                  "4. 联调测试 ：接入新加坡知识库与通用知识库，测试智能体的意图识别与 RAG 检索准确率，验证其作为“业务助手”的基本闭环。",
                  "5. 通用库维护 ：建立通用财税知识库的持续维护机制，确保数据的时效性与准确性。"
                ]}
              />

              <TimelineCard 
                quarter="Q3" 
                tag="智能化期"
                icon={<BarChart3 />}
                title="Intelligence & Empathy —— 自动化跃迁与情感注入"
                side="left"
                items={[
                  "1. 自动化跃迁 ：平台向“智能化”深度迭代。引入 AI/RPA 模块，将大量人工执行环节（如对账、录单、审核）转化为自动化执行，显著提升人效。",
                  "2. 新加坡本地化验证 ：接入或开发 新加坡税务本地化模块 (Localisation)，在真实环境中验证并解决新加坡出海企业的深度财务合规需求。",
                  "3. “平台+AI” 融合方案 ：研究并制定 [数智化平台 + 合规智能体 + 知识库] 的深度融合技术架构。打造平台的“AI 引擎”，为 Q4 的全面整合做技术储备。",
                  "4. 知识库规模化 ：完成 10+ 国家 的财税合规知识库搭建，形成覆盖主流出海区域的知识网络。",
                  "5. 情感智能体 (Beta) ：智能体引入 情感模块 (EQ) ，接入更多国家知识库，并在小范围客户中上线试运行，收集真实交互数据。"
                ]}
              />

              <TimelineCard 
                quarter="Q4" 
                tag="爆发期"
                icon={<Layers />}
                title="Integration & Ecosystem —— 全面融合与生态变现"
                side="right"
                items={[
                  "1. AI 能力全面集成 ：基于前三季度积累，定制开发深度的 AI 功能模块，并与合规智能体、全球知识库进行“更深度整合”，打造具备市场竞争力的 AI Native 财税平台。",
                  "2. 全球架构部署 ：完成符合各区域数据安全法规（如 GDPR, PDPA）的 全球分布式部署架构 设计与落地，满足未来业务快速拓展的合规红线。",
                  "3. 全球知识库管理平台 ：上线知识库管理后台 (KBMS)，实现对全球财税知识库的自动化更新、版本管理与质量监控。具备对外部系统提供 API 接入服务的能力。",
                  "4. 持续覆盖 ：继续扩展长尾国家的财税合规知识库。",
                  "5. 情感营销智能体正式发布 ：正式上线“瑞华云情感营销智能体”，全渠道接入 企业微信、小程序、官方网站 ，承担“7x24小时数字合伙人”与“获客营销”双重职能。",
                  "6. 敏捷工具箱 (Agile Toolbox) 发布 ：将全年项目开发中自研的高价值小工具（如票据解析、格式转换、合规自查脚本）进行聚合与产品化，形成“瑞华云敏捷工具集”。部分工具内部复用提效，部分高频工具推向市场，作为低成本引流获客的 \"Hook Products\" 。"
                ]}
              />
            </div>
          </div>
        </section>

        {/* Section 5: Summary */}
        <section id="summary" className="relative pt-32 border-t border-slate-200">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-slate-900 mb-16 tracking-tight">五、 总结</h2>
            <div className="p-12 md:p-20 bg-slate-900 text-white shadow-2xl">
               <div className="mb-10 text-slate-500 font-bold uppercase tracking-widest text-[10px]">Strategic Conclusion</div>
               
               <p className="text-2xl md:text-3xl text-white font-bold leading-tight mb-12">
                 2026年，瑞华云数豆科技作为一家 <span className="text-slate-400">新兴的财税 AI 科技公司</span> ，将通过 <strong>基于 Odoo19的出海企业财税合规数智化平台 (强壮的身体)</strong> 、 <strong>全球财税合规知识库 (智慧的大脑)</strong> 、<strong>瑞华云营销合规智能体 (有温度的数字合伙人)</strong> 以及 <strong>敏捷工具箱 (灵活的触手)</strong> ，为出海财税重塑新的服务标准。
               </p>
               
               <div className="h-px w-full bg-slate-800 mb-12"></div>
               
               <div className="text-slate-300 font-bold text-2xl italic leading-relaxed">
                 我们的目标是：让每一个出海企业，都拥有以为“24小时在线、不仅懂合规、更懂你”的数字首席财务官。
               </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t border-slate-200 py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-start gap-16 mb-20">
            <div>
              <div className="flex items-center space-x-3 mb-8">
                 <div className="bg-slate-900 p-2 text-white font-black text-xl">R</div>
                 <div className="text-2xl font-bold tracking-tighter">瑞华云数豆科技</div>
              </div>
              <p className="text-slate-400 max-w-sm text-sm font-medium">
                引领全球财税合规的数字化革命，为出海企业构建最坚实的合规护城河。
              </p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-slate-100 gap-6">
            <div className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">
              © 2026 Ruihua Cloud Shudou Tech. Internal Use Only.
            </div>
            <div className="flex space-x-8 text-[10px] font-bold uppercase tracking-widest text-slate-400">
              <a href="#" className="hover:text-slate-900 transition-colors">Privacy</a>
              <a href="#" className="hover:text-slate-900 transition-colors">Compliance</a>
              <a href="#" className="hover:text-slate-900 transition-colors">Security</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Navigation */}
      <div className="fixed bottom-12 right-12 z-50">
        <button 
          onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
          className="w-16 h-16 bg-slate-900 text-white flex items-center justify-center shadow-2xl hover:bg-slate-700 transition-all"
        >
          <ArrowRight size={20} className="-rotate-90" />
        </button>
      </div>
    </div>
  );
};

export default App;