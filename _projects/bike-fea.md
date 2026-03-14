---
title: "Bicycle Frame Stress Analysis"
subtitle: "FEA of a custom steel road frame under combined loading"
description: "Finite element analysis of a butted chromoly steel bicycle frame, evaluating stress concentrations at tube junctions under rider weight, pedaling, and braking loads."
category: research
date: 2024-01-15
featured: true
status: Completed

thumbnail: /assets/images/projects/bike-fea-thumb.jpg
hero_image: /assets/images/projects/bike-fea-hero.jpg

skills:
  - ANSYS Mechanical
  - SolidWorks
  - Technical Writing
  - Failure Analysis

stats:
  - value: "1.8×"
    label: Safety Factor
  - value: "6"
    label: Load Cases
  - value: "14,000"
    label: Elements

links:
  - label: "Full Report"
    url: "/assets/projects/bike-fea-report.pdf"

tags: [FEA, structural analysis, mechanical design]
---

## Project Summary

This analysis was completed as part of a graduate Machine Design elective. I modeled a
standard diamond frame geometry in SolidWorks using nominal wall thicknesses for 4130
chromoly steel, then meshed and solved the assembly in ANSYS Mechanical.

## Load Cases

Six loading scenarios were evaluated:

1. **Static rider weight** — 90 kg rider, static standing
2. **Dynamic pedaling** — crank load with 1.5× dynamic factor
3. **Emergency braking** — front brake only, tip-forward moment
4. **Combined** — pedaling + turning at 20 km/h
5. **Pothole impact** — 2× static, vertical impulse
6. **Sprint** — asymmetric pedaling load at max power output

## Key Findings

Maximum von Mises stress occurred at the **down tube / head tube junction** under the combined
sprint + braking case (282 MPa vs. 520 MPa yield for 4130 Cr-Mo, safety factor 1.84).

Weld toe stress concentrations reduced the effective safety factor to approximately 1.3 at
critical joints, consistent with industry practice of using a minimum Kt factor of 1.5 at
welded nodes.

## Recommendations

- Increase down tube wall thickness from 0.9mm to 1.2mm at head tube junction
- Add gusset plate at seat tube / top tube junction for sprint loads
- Consider butted tubing with variable wall thickness to save mass

## Tools & Methods

All geometry was imported as a STEP assembly. Mesh convergence was verified by halving element
size twice at critical features; stress values changed by less than 3% between refinement levels,
confirming mesh independence.
