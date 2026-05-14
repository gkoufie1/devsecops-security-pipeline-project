# DevSecOps Pipeline Architecture

Developer Push
     |
     v
GitHub Actions
     |
     +--> Lint
     +--> Unit Test
     +--> Semgrep SAST
     +--> Trivy Vulnerability Scan
     +--> Push to ECR
     +--> Deploy to EKS

Security Gate:
Block deployment if CRITICAL CVEs are detected.
