import { Component } from '@angular/core';

interface Skill {
  name: string;
  level: number;
  category: string;
}

@Component({
  selector: 'app-skills',
  template: `
    <section class="skills-section py-5">
      <div class="container">
        <h2 class="text-center mb-5" data-aos="fade-up">Skills</h2>
        
        <div class="row" *ngFor="let category of categories" class="mb-5">
          <div class="col-12">
            <h3 class="h4 mb-4" data-aos="fade-up">{{ category }}</h3>
            <div class="row g-4">
              <div class="col-md-6" *ngFor="let skill of getSkillsByCategory(category)" data-aos="fade-up">
                <div class="skill-item">
                  <div class="d-flex justify-content-between mb-1">
                    <span class="skill-name">{{ skill.name }}</span>
                    <span class="skill-percentage">{{ skill.level }}%</span>
                  </div>
                  <div class="progress">
                    <div class="progress-bar" role="progressbar"
                         [style.width.%]="skill.level"
                         [attr.aria-valuenow]="skill.level"
                         aria-valuemin="0"
                         aria-valuemax="100">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .skill-item {
      margin-bottom: 1.5rem;
      opacity: 0;
      animation: fadeInUp 0.6s ease forwards;
    }
    .progress {
      height: 12px;
      border-radius: 6px;
      background-color: #e9ecef;
      overflow: hidden;
      position: relative;
    }
    .progress-bar {
      background: linear-gradient(90deg, #007bff, #00bcd4);
      border-radius: 6px;
      transition: width 1.5s cubic-bezier(0.4, 0, 0.2, 1);
      position: relative;
    }
    .progress-bar::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(
        45deg,
        rgba(255,255,255,0.2) 25%,
        transparent 25%,
        transparent 50%,
        rgba(255,255,255,0.2) 50%,
        rgba(255,255,255,0.2) 75%,
        transparent 75%,
        transparent
      );
      background-size: 20px 20px;
      animation: moveStripes 1s linear infinite;
    }
    .skill-name {
      font-weight: 500;
      color: #2c3e50;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.5rem;
    }
    .skill-percentage {
      color: #007bff;
      font-weight: bold;
      font-size: 0.9rem;
    }
    @keyframes moveStripes {
      0% {
        background-position: 0 0;
      }
      100% {
        background-position: 20px 0;
      }
    }
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    :host {
      display: block;
      padding: 2rem 0;
    }
    h3 {
      color: #2c3e50;
      position: relative;
      display: inline-block;
      margin-bottom: 2rem;
    }
    h3::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 0;
      width: 50px;
      height: 3px;
      background: linear-gradient(90deg, #007bff, #00bcd4);
      border-radius: 3px;
    }
  `]
})
export class SkillsComponent {
  skills: Skill[] = [
    // Programming Languages
    { name: 'Python', level: 90, category: 'Programming Languages' },
    { name: 'Java', level: 85, category: 'Programming Languages' },
    { name: 'JavaScript', level: 85, category: 'Programming Languages' },
    { name: 'C', level: 80, category: 'Programming Languages' },
    
    // Frontend Development
    { name: 'React.js', level: 88, category: 'Frontend Development' },
    { name: 'HTML/CSS', level: 85, category: 'Frontend Development' },
    { name: 'Bootstrap', level: 85, category: 'Frontend Development' },
    
    // Backend Development
    { name: 'Spring Boot', level: 85, category: 'Backend Development' },
    { name: 'Node.js', level: 82, category: 'Backend Development' },
    { name: 'Express.js', level: 80, category: 'Backend Development' },
    { name: 'REST APIs', level: 85, category: 'Backend Development' },
    
    // Data & Analytics
    { name: 'Pandas', level: 88, category: 'Data & Analytics' },
    { name: 'NumPy', level: 85, category: 'Data & Analytics' },
    { name: 'Matplotlib', level: 82, category: 'Data & Analytics' },
    { name: 'Data Visualization', level: 85, category: 'Data & Analytics' },
    
    // Databases & Tools
    { name: 'MongoDB', level: 85, category: 'Databases & Tools' },
    { name: 'SQL', level: 85, category: 'Databases & Tools' },
    { name: 'Git', level: 88, category: 'Databases & Tools' },
    { name: 'Postman', level: 85, category: 'Databases & Tools' }
  ];

  get categories(): string[] {
    return [...new Set(this.skills.map(skill => skill.category))];
  }

  getSkillsByCategory(category: string): Skill[] {
    return this.skills.filter(skill => skill.category === category);
  }
}