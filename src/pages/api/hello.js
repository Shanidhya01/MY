// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// Enhanced API route with theme and background utilities

export default function handler(req, res) {
  const { method, query } = req;
  
  switch (method) {
    case 'GET':
      // Return user info and theme data
      return res.status(200).json({
        name: 'Shanidhya Kumar',
        title: 'Full-Stack Developer',
        role: 'Problem Solver',
        status: 'Available for opportunities',
        theme: {
          primary: '#6366f1',
          secondary: '#8b5cf6',
          accent: '#06b6d4',
          background: {
            primary: '#0f172a',
            secondary: '#1e293b',
            gradient: 'linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #334155 50%, #1e293b 75%, #0f172a 100%)'
          }
        },
        gradients: {
          hero: 'radial-gradient(circle at 30% 20%, rgba(99, 102, 241, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(139, 92, 246, 0.1) 0%, transparent 50%), linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
          card: 'linear-gradient(145deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
          border: 'linear-gradient(90deg, rgba(99, 102, 241, 0.3), rgba(139, 92, 246, 0.3), rgba(6, 182, 212, 0.3))'
        }
      });
      
    case 'POST':
      // Handle contact form or other POST requests
      const { name, email, message } = req.body;
      
      // Here you would typically save to database or send email
      return res.status(200).json({
        success: true,
        message: 'Message received successfully',
        data: { name, email }
      });
      
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      return res.status(405).json({ error: `Method ${method} Not Allowed` });
  }
}

// Export theme configuration for use in components
export const themeConfig = {
  backgrounds: {
    smooth: {
      hero: `
        background: #0f172a;
        background-image: 
          radial-gradient(circle at 25% 25%, rgba(99, 102, 241, 0.1) 0%, transparent 25%),
          radial-gradient(circle at 75% 75%, rgba(139, 92, 246, 0.08) 0%, transparent 25%),
          radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.06) 0%, transparent 30%);
        background-size: 800px 800px, 600px 600px, 1000px 1000px;
        background-position: 0% 0%, 100% 100%, 50% 50%;
        background-attachment: fixed;
      `,
      section: `
        background: linear-gradient(180deg, 
          rgba(15, 23, 42, 1) 0%, 
          rgba(30, 41, 59, 0.95) 25%, 
          rgba(51, 65, 85, 0.9) 50%, 
          rgba(30, 41, 59, 0.95) 75%, 
          rgba(15, 23, 42, 1) 100%
        );
      `,
      card: `
        background: rgba(255, 255, 255, 0.03);
        backdrop-filter: blur(20px);
        border: 1px solid rgba(255, 255, 255, 0.05);
      `
    },
    animated: {
      flowing: `
        background: linear-gradient(-45deg, #0f172a, #1e293b, #334155, #475569);
        background-size: 400% 400%;
        animation: gradientFlow 15s ease infinite;
        
        @keyframes gradientFlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `,
      particle: `
        background: #0f172a;
        position: relative;
        overflow: hidden;
        
        &::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            radial-gradient(2px 2px at 40% 60%, rgba(99, 102, 241, 0.4), transparent),
            radial-gradient(2px 2px at 60% 40%, rgba(139, 92, 246, 0.4), transparent),
            radial-gradient(1px 1px at 80% 20%, rgba(6, 182, 212, 0.3), transparent);
          background-size: 200px 200px, 300px 300px, 150px 150px;
          animation: particles 20s linear infinite;
        }
        
        @keyframes particles {
          0% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(30px, -30px) rotate(120deg); }
          66% { transform: translate(-20px, 20px) rotate(240deg); }
          100% { transform: translate(0, 0) rotate(360deg); }
        }
      `
    }
  },
  colors: {
    slate: {
      50: '#f8fafc',
      100: '#f1f5f9',
      200: '#e2e8f0',
      300: '#cbd5e1',
      400: '#94a3b8',
      500: '#64748b',
      600: '#475569',
      700: '#334155',
      800: '#1e293b',
      900: '#0f172a'
    },
    indigo: {
      50: '#eef2ff',
      100: '#e0e7ff',
      200: '#c7d2fe',
      300: '#a5b4fc',
      400: '#818cf8',
      500: '#6366f1',
      600: '#4f46e5',
      700: '#4338ca',
      800: '#3730a3',
      900: '#312e81'
    },
    purple: {
      50: '#faf5ff',
      100: '#f3e8ff',
      200: '#e9d5ff',
      300: '#d8b4fe',
      400: '#c084fc',
      500: '#a855f7',
      600: '#9333ea',
      700: '#7c3aed',
      800: '#6b21a8',
      900: '#581c87'
    }
  }
};