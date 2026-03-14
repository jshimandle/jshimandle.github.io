---
title: "Pneumatic Soft Actuator for Prosthetic Hand"
subtitle: "Designing a compliant, low-cost gripper using silicone casting and FDM molds"
description: "A 3-finger soft robotic gripper fabricated from shore-20 silicone, driven by a compact pneumatic system. Capable of gripping irregular objects up to 400g."
category: mechanical
date: 2024-05-01
featured: true
status: Completed

thumbnail: /assets/images/projects/soft-actuator-thumb.jpg
hero_image: /assets/images/projects/soft-actuator-hero.jpg

skills:
  - SolidWorks
  - Silicone Casting
  - FDM Prototyping
  - Pneumatic Systems
  - MATLAB

stats:
  - value: "400g"
    label: Grip Force
  - value: "3"
    label: Actuators
  - value: "12 weeks"
    label: Duration
  - value: "~$60"
    label: Materials Cost

links:
  - label: "GitHub Repo"
    url: "https://github.com/yourusername/soft-actuator"
  - label: "Final Report (PDF)"
    url: "/assets/projects/soft-actuator-report.pdf"

gallery:
  - src: /assets/images/projects/soft-actuator-1.jpg
    alt: "Silicone mold setup"
    caption: "Two-part FDM mold before casting"
  - src: /assets/images/projects/soft-actuator-2.jpg
    alt: "Finished actuator"
    caption: "Cured silicone finger with embedded pneumatic channel"
  - src: /assets/images/projects/soft-actuator-3.jpg
    alt: "Gripper grasping an object"
    caption: "Gripping a 350g irregular object"

tags: [robotics, soft-robotics, fabrication, prosthetics]
---

## Overview

This project explores the design and fabrication of a pneumatically-driven soft robotic gripper
intended as a low-cost prosthetic end-effector. Unlike rigid grippers, soft actuators
conform to object geometry and are inherently safer for human interaction.

## Motivation

Commercial prosthetic hands range from $5,000 to over $70,000. A primary driver for this
project was demonstrating that functional, compliant gripping could be achieved for under $100
in materials using accessible fabrication techniques.

## Design Process

### Actuator Geometry

I modeled three candidate finger geometries in SolidWorks — straight channel, waffle
structure, and bellows — and selected the bellows design based on FEA results showing the
highest bending angle per unit pressure (65° at 20 kPa).

### Mold Fabrication

Two-part molds were printed in PLA on a Prusa MK3. Print orientation and tolerances were
iterated over four generations to eliminate silicone leakage at the parting line.

### Material Selection

Shore-20 Ecoflex 00-20 silicone was selected for its high elongation (800%) and
biocompatibility. Pigment was added for visual tracking during testing.

## Testing & Results

| Metric | Target | Result |
|--------|--------|--------|
| Max grip force | 300g | 412g |
| Actuation pressure | < 30 kPa | 18 kPa |
| Cycle life | 500 cycles | 1,200+ cycles |
| Cost | < $100 | $58 |

## Lessons Learned

The biggest challenge was controlling silicone shrinkage during cure — approximately 0.5mm
linear shrinkage per 25mm that required compensatory mold scaling. Future work would explore
textile reinforcement to improve force transmission efficiency.
