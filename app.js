const express = require("express");
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Project metadata
const projectInfo = {
  projectName: "CI/CD Pipeline to AWS ECS",
  description: "Automated deployment pipeline using GitHub Actions",
  version: "1.0.0",
  author: "DevOps Engineer",
  deploymentDate: new Date().toISOString(),
};

const techStack = {
  cicd: "GitHub Actions",
  containerization: "Docker",
  orchestration: "AWS ECS (Fargate)",
  registry: "Amazon ECR",
  loadBalancer: "Application Load Balancer",
  iam: "AWS IAM",
  runtime: "Node.js + Express",
};

const features = [
  "Fully automated CI/CD pipeline",
  "Containerized application deployment",
  "Zero-downtime deployments",
  "Auto-scaling with ECS Fargate",
  "Load balanced traffic distribution",
  "Secure image storage in ECR",
];

// Home route
app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>CI/CD Pipeline - AWS ECS</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
        }
        .container {
          background: white;
          border-radius: 20px;
          padding: 40px;
          max-width: 800px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.3);
        }
        h1 {
          color: #667eea;
          margin-bottom: 10px;
          font-size: 2.5em;
        }
        .subtitle {
          color: #666;
          margin-bottom: 30px;
          font-size: 1.1em;
        }
        .status {
          background: #10b981;
          color: white;
          padding: 15px 25px;
          border-radius: 10px;
          display: inline-block;
          margin-bottom: 30px;
          font-weight: bold;
        }
        .section {
          margin-bottom: 25px;
        }
        .section h2 {
          color: #333;
          margin-bottom: 15px;
          font-size: 1.5em;
          border-left: 4px solid #667eea;
          padding-left: 15px;
        }
        .tech-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 15px;
          margin-top: 15px;
        }
        .tech-item {
          background: #f3f4f6;
          padding: 15px;
          border-radius: 10px;
          border-left: 3px solid #667eea;
        }
        .tech-label {
          font-weight: bold;
          color: #667eea;
          font-size: 0.9em;
          margin-bottom: 5px;
        }
        .tech-value {
          color: #333;
        }
        .feature-list {
          list-style: none;
        }
        .feature-list li {
          background: #f3f4f6;
          padding: 12px 15px;
          margin-bottom: 10px;
          border-radius: 8px;
          border-left: 3px solid #10b981;
        }
        .feature-list li:before {
          content: "✓ ";
          color: #10b981;
          font-weight: bold;
          margin-right: 10px;
        }
        .api-links {
          background: #fef3c7;
          padding: 20px;
          border-radius: 10px;
          margin-top: 20px;
        }
        .api-links h3 {
          color: #92400e;
          margin-bottom: 10px;
        }
        .api-link {
          display: block;
          color: #1d4ed8;
          text-decoration: none;
          padding: 8px 0;
          font-family: monospace;
        }
        .api-link:hover {
          text-decoration: underline;
        }
        .footer {
          text-align: center;
          margin-top: 30px;
          color: #666;
          font-size: 0.9em;
        }
        .emoji {
          font-size: 1.2em;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>🚀 CI/CD Pipeline Success!</h1>
        <p class="subtitle">Deployed via GitHub Actions to AWS ECS Fargate</p>
        
        <div class="status">
          <span class="emoji">✅</span> Application Running Successfully
        </div>

        <div class="section">
          <h2>📊 Tech Stack</h2>
          <div class="tech-grid">
            <div class="tech-item">
              <div class="tech-label">CI/CD</div>
              <div class="tech-value">GitHub Actions</div>
            </div>
            <div class="tech-item">
              <div class="tech-label">Container</div>
              <div class="tech-value">Docker</div>
            </div>
            <div class="tech-item">
              <div class="tech-label">Orchestration</div>
              <div class="tech-value">AWS ECS Fargate</div>
            </div>
            <div class="tech-item">
              <div class="tech-label">Registry</div>
              <div class="tech-value">Amazon ECR</div>
            </div>
            <div class="tech-item">
              <div class="tech-label">Load Balancer</div>
              <div class="tech-value">AWS ALB</div>
            </div>
            <div class="tech-item">
              <div class="tech-label">Runtime</div>
              <div class="tech-value">Node.js + Express</div>
            </div>
          </div>
        </div>

        <div class="section">
          <h2>⚡ Key Features</h2>
          <ul class="feature-list">
            <li>Fully automated CI/CD pipeline</li>
            <li>Containerized application deployment</li>
            <li>Zero-downtime deployments</li>
            <li>Auto-scaling with ECS Fargate</li>
            <li>Load balanced traffic distribution</li>
            <li>Secure image storage in ECR</li>
          </ul>
        </div>

        

        <div class="footer">
          Tharaka Lakshan
        </div>
      </div>
    </body>
    </html>
  `);
});

// Health check endpoint
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "healthy",
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    service: "CI/CD Pipeline Demo",
    environment: process.env.NODE_ENV || "production",
  });
});

// Project info endpoint
app.get("/info", (req, res) => {
  res.json({
    ...projectInfo,
    uptime: `${Math.floor(process.uptime())} seconds`,
    nodeVersion: process.version,
    platform: process.platform,
    memory: {
      used: `${Math.round(process.memoryUsage().heapUsed / 1024 / 1024)} MB`,
      total: `${Math.round(process.memoryUsage().heapTotal / 1024 / 1024)} MB`,
    },
  });
});

// Tech stack endpoint
app.get("/tech", (req, res) => {
  res.json({
    technologies: techStack,
    description: "Complete technology stack used in this CI/CD pipeline project",
  });
});

// Features endpoint
app.get("/features", (req, res) => {
  res.json({
    features: features,
    total: features.length,
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    error: "Not Found",
    message: `Route ${req.url} not found`,
    availableRoutes: ["/", "/health", "/info", "/tech", "/features"],
  });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("=================================");
  console.log("🚀 CI/CD Pipeline Application");
  console.log("=================================");
  console.log(`✅ Server running on port ${PORT}`);
  console.log(`📅 Started at: ${new Date().toISOString()}`);
  console.log(`🌍 Environment: ${process.env.NODE_ENV || "production"}`);
  console.log(`📊 Node Version: ${process.version}`);
  console.log("=================================");
  console.log("Available endpoints:");
  console.log(`  - http://localhost:${PORT}/`);
  console.log(`  - http://localhost:${PORT}/health`);
  console.log(`  - http://localhost:${PORT}/info`);
  console.log(`  - http://localhost:${PORT}/tech`);
  console.log(`  - http://localhost:${PORT}/features`);
  console.log("=================================");
});
