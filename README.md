# DevSecOps CI/CD Pipeline with Security Gates

Production-grade DevSecOps pipeline using:
- GitHub Actions
- Trivy
- Semgrep
- Docker
- AWS ECR
- Kubernetes (EKS)

## Pipeline Stages
1. Lint
2. Unit Tests
3. Semgrep SAST Scan
4. Trivy Container Scan
5. Push to ECR
6. Deploy to Kubernetes

## Features
- Critical CVE policy gate
- Automated deployment blocking
- Shift-left security
- Cloud-native CI/CD
