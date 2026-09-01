import { useState } from 'react';
import { Copy, Check, Terminal, Sparkles, Cpu, Layers, Flame } from 'lucide-react';

const BLUEPRINTS = [
  {
    id: 'wearhouse',
    tab: 'wearhouse.dart',
    title: 'Wearhouse — On-Device CNN Lookbook',
    type: 'Flutter Mobile App',
    badge: 'Computer Vision & Heuristics',
    metric: 'SUS 89.75 • Precision 0.76',
    architecture: 'Google ML Kit CNN Segmentation → Color Harmony & Weather Heuristics → Offline Cache',
    code: `// On-device ML Kit image segmentation & heuristic scoring
Future<List<OutfitMatch>> rankPairings(WardrobeItem item) async {
  final mask = await mlKitSegmenter.processImage(item.rawImage);
  final cleaned = await applyChromaMask(item.rawImage, mask);
  
  return wardrobePool
    .where((c) => c.category != item.category)
    .map((c) => OutfitMatch(item: c, score: heuristicScore(item, c)))
    .toList()..sort((a, b) => b.score.compareTo(a.score));
}`
  },
  {
    id: 'agentic-ai',
    tab: 'attrition_agent.py',
    title: 'Agentic AI Student Attrition Predictor',
    type: 'FastAPI & n8n System',
    badge: 'Predictive Analytics & AI Agent',
    metric: 'Random Forest 0.76 • Render',
    architecture: 'FastAPI Inference → Autonomous n8n Workflow (Gemini 3.1 Flash Lite) → Twilio SMS / Gmail Dispatch',
    code: `# FastAPI predictive inference & n8n agentic dispatch
@app.post("/api/v1/predict-retention")
async def evaluate_student_risk(student: StudentProfile):
    prob = rf_model.predict_proba([features(student)])[0][1]
    if prob >= RISK_THRESHOLD_HIGH:
        await n8n_webhook.trigger_agentic_intervention({
            "student_id": student.id, "risk": float(prob)
        })
    return {"status": "success", "risk_probability": prob}`
  },
  {
    id: 'iot-parcel',
    tab: 'parcel_guard.cpp',
    title: 'Smart Anti-Theft IoT Parcel Box',
    type: 'Embedded C++ Firmware',
    badge: 'Hardware Security System',
    metric: 'Event-Driven C++ • Web Telemetry',
    architecture: 'Arduino UNO + ESP8266 WeMos D1 → Ultrasonic Sonar Array → 12V Solenoid Latch Actuation',
    code: `// Sonar distance detection & automatic lock loop
void loop() {
  float distanceCm = sonarSensor.ping_cm();
  if (distanceCm > 0 && distanceCm <= DETECTION_THRESHOLD) {
    if (!boxLocked && verifyDoorClosed()) {
      digitalWrite(SOLENOID_PIN, HIGH); // Secure latch
      postTelemetryToDashboard(STATUS_SECURED);
      boxLocked = true;
    }
  }
  webServer.handleClient();
}`
  },
  {
    id: 'hackerspace',
    tab: 'ProjectsController.cs',
    title: 'Hackerspace Project Manager',
    type: 'Full-Stack Web API',
    badge: 'ASP.NET Core & Three.js',
    metric: 'RBAC Security • SQL Server',
    architecture: 'ASP.NET Core Web API → Entity Framework Core & SQL Server → React & Three.js 3D Terminal',
    code: `// Secure milestone dispatch with RBAC authorization
[Authorize(Roles = "LeadEngineer, Admin")]
[HttpPost("{projectId}/milestones")]
public async Task<IActionResult> AddMilestone(int projectId, MilestoneDto dto) {
    var proj = await _db.Projects.Include(p => p.Collaborators).FindAsync(projectId);
    if (proj == null) return NotFound();
    proj.Milestones.Add(new Milestone { Title = dto.Title, Status = Status.Active });
    await _db.SaveChangesAsync();
    return Ok(new { success = true });
}`
  },
  {
    id: 'dough-district',
    tab: 'bakery_db.dart',
    title: 'Dough District Mobile Bakery',
    type: 'Flutter Mobile App',
    badge: 'Offline-First SQLite',
    metric: 'Relational DB • Async CRUD',
    architecture: 'Flutter State Management → Relational SQLite Local Schemas → Async Cart Transactions',
    code: `// Offline SQLite transaction & receipt persistence
Future<void> checkoutCart(CartState cart) async {
  final db = await LocalDatabase.instance.database;
  await db.transaction((txn) async {
    final orderId = await txn.insert('orders', cart.toOrderMap());
    for (var item in cart.items) {
      await txn.insert('order_items', item.toMap(orderId));
    }
  });
}`
  }
];

export default function Hero3D() {
  const [activeTab, setActiveTab] = useState('wearhouse');
  const [copied, setCopied] = useState(false);

  const current = BLUEPRINTS.find(b => b.id === activeTab) || BLUEPRINTS[0];

  const handleCopy = () => {
    navigator.clipboard.writeText(current.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="unique-workbench-container">
      {/* File Drawer Tabs */}
      <div className="workbench-drawer-bar">
        <div className="drawer-tabs-scroll">
          {BLUEPRINTS.map(b => (
            <button
              key={b.id}
              onClick={() => setActiveTab(b.id)}
              className={`drawer-tab-btn ${activeTab === b.id ? 'active' : ''}`}
            >
              <span className="drawer-tab-dot"></span>
              <span className="font-mono">{b.tab}</span>
            </button>
          ))}
        </div>

        <button onClick={handleCopy} className="workbench-copy-action font-mono" title="Copy code snippet">
          {copied ? <Check size={12} className="text-emerald" /> : <Copy size={12} />}
          <span>{copied ? 'Copied' : 'Copy'}</span>
        </button>
      </div>

      {/* Blueprint Architecture Ribbon */}
      <div className="workbench-blueprint-header">
        <div className="blueprint-meta">
          <div className="blueprint-title-row">
            <h3 className="blueprint-title">{current.title}</h3>
            <span className="blueprint-tag font-mono">{current.badge}</span>
          </div>
          <p className="blueprint-flow font-mono">{current.architecture}</p>
        </div>
        <div className="blueprint-metric-chip font-mono">
          <Sparkles size={12} />
          <span>{current.metric}</span>
        </div>
      </div>

      {/* Code Editor Window */}
      <div className="workbench-editor-window">
        <div className="editor-line-numbers font-mono">
          {current.code.split('\n').map((_, idx) => (
            <span key={idx}>{idx + 1}</span>
          ))}
        </div>
        <pre className="editor-code-pre font-mono">
          <code>{current.code}</code>
        </pre>
      </div>
    </div>
  );
}