'use client';

import { useState } from 'react';

type PlayStyle = 'aggressive' | 'balanced' | 'sniper';

interface SensitivityConfig {
  camera: {
    fpsCamera: number;
    tppCamera: number;
    free: number;
  };
  ads: {
    noScope: number;
    redDot: number;
    holographic: number;
    x2: number;
    x3: number;
    x4: number;
    x6: number;
    x8: number;
  };
  gyroscope: {
    fpsCameraGyro: number;
    tppCameraGyro: number;
    fpsNoScopeGyro: number;
    tppNoScopeGyro: number;
    redDotGyro: number;
    holographicGyro: number;
    x2Gyro: number;
    x3Gyro: number;
    x4Gyro: number;
    x6Gyro: number;
    x8Gyro: number;
  };
}

const sensitivityConfigs: Record<PlayStyle, SensitivityConfig> = {
  aggressive: {
    camera: {
      fpsCamera: 95,
      tppCamera: 85,
      free: 120,
    },
    ads: {
      noScope: 90,
      redDot: 65,
      holographic: 62,
      x2: 55,
      x3: 48,
      x4: 42,
      x6: 35,
      x8: 28,
    },
    gyroscope: {
      fpsCameraGyro: 285,
      tppCameraGyro: 270,
      fpsNoScopeGyro: 280,
      tppNoScopeGyro: 265,
      redDotGyro: 240,
      holographicGyro: 235,
      x2Gyro: 220,
      x3Gyro: 200,
      x4Gyro: 180,
      x6Gyro: 160,
      x8Gyro: 140,
    },
  },
  balanced: {
    camera: {
      fpsCamera: 75,
      tppCamera: 70,
      free: 100,
    },
    ads: {
      noScope: 75,
      redDot: 55,
      holographic: 52,
      x2: 45,
      x3: 40,
      x4: 35,
      x6: 30,
      x8: 25,
    },
    gyroscope: {
      fpsCameraGyro: 250,
      tppCameraGyro: 240,
      fpsNoScopeGyro: 245,
      tppNoScopeGyro: 235,
      redDotGyro: 210,
      holographicGyro: 205,
      x2Gyro: 190,
      x3Gyro: 175,
      x4Gyro: 160,
      x6Gyro: 145,
      x8Gyro: 130,
    },
  },
  sniper: {
    camera: {
      fpsCamera: 65,
      tppCamera: 60,
      free: 90,
    },
    ads: {
      noScope: 70,
      redDot: 50,
      holographic: 48,
      x2: 40,
      x3: 35,
      x4: 30,
      x6: 25,
      x8: 20,
    },
    gyroscope: {
      fpsCameraGyro: 220,
      tppCameraGyro: 210,
      fpsNoScopeGyro: 215,
      tppNoScopeGyro: 205,
      redDotGyro: 185,
      holographicGyro: 180,
      x2Gyro: 165,
      x3Gyro: 150,
      x4Gyro: 140,
      x6Gyro: 130,
      x8Gyro: 120,
    },
  },
};

export default function Home() {
  const [playStyle, setPlayStyle] = useState<PlayStyle>('balanced');
  const config = sensitivityConfigs[playStyle];

  return (
    <div className="container">
      <div className="header">
        <h1>🎮 PUBG Mobile - Infinix Note 40</h1>
        <p>Paramètres de sensibilité optimisés</p>
      </div>

      <div className="device-info">
        <h2>📱 Spécifications Infinix Note 40</h2>
        <div className="specs">
          <div className="spec-item">
            <strong>Écran</strong>
            6.78" AMOLED, 120Hz
          </div>
          <div className="spec-item">
            <strong>Processeur</strong>
            MediaTek Helio G99
          </div>
          <div className="spec-item">
            <strong>RAM</strong>
            8GB (extensible)
          </div>
          <div className="spec-item">
            <strong>Tactile</strong>
            Échantillonnage 360Hz
          </div>
        </div>
      </div>

      <div className="style-toggle">
        <button
          className={`style-btn ${playStyle === 'aggressive' ? 'active' : ''}`}
          onClick={() => setPlayStyle('aggressive')}
        >
          🔥 Agressif
        </button>
        <button
          className={`style-btn ${playStyle === 'balanced' ? 'active' : ''}`}
          onClick={() => setPlayStyle('balanced')}
        >
          ⚖️ Équilibré
        </button>
        <button
          className={`style-btn ${playStyle === 'sniper' ? 'active' : ''}`}
          onClick={() => setPlayStyle('sniper')}
        >
          🎯 Sniper
        </button>
      </div>

      <div className="sensitivity-section">
        <h2>🎯 Sensibilité Caméra</h2>
        <div className="sensitivity-category">
          <h3>Vue à la 3ème/1ère personne</h3>
          <div className="sensitivity-grid">
            <div className="sensitivity-item">
              <div className="sensitivity-label">Caméra FPS</div>
              <div className="sensitivity-value">{config.camera.fpsCamera}%</div>
            </div>
            <div className="sensitivity-item">
              <div className="sensitivity-label">Caméra TPP</div>
              <div className="sensitivity-value">{config.camera.tppCamera}%</div>
            </div>
            <div className="sensitivity-item">
              <div className="sensitivity-label">Vue Libre</div>
              <div className="sensitivity-value">{config.camera.free}%</div>
            </div>
          </div>
        </div>
      </div>

      <div className="sensitivity-section">
        <h2>🔫 Sensibilité ADS (Visée)</h2>
        <div className="sensitivity-category">
          <h3>Optiques</h3>
          <div className="sensitivity-grid">
            <div className="sensitivity-item">
              <div className="sensitivity-label">Sans lunette</div>
              <div className="sensitivity-value">{config.ads.noScope}%</div>
            </div>
            <div className="sensitivity-item">
              <div className="sensitivity-label">Point Rouge</div>
              <div className="sensitivity-value">{config.ads.redDot}%</div>
            </div>
            <div className="sensitivity-item">
              <div className="sensitivity-label">Holographique</div>
              <div className="sensitivity-value">{config.ads.holographic}%</div>
            </div>
            <div className="sensitivity-item">
              <div className="sensitivity-label">Lunette 2x</div>
              <div className="sensitivity-value">{config.ads.x2}%</div>
            </div>
            <div className="sensitivity-item">
              <div className="sensitivity-label">Lunette 3x</div>
              <div className="sensitivity-value">{config.ads.x3}%</div>
            </div>
            <div className="sensitivity-item">
              <div className="sensitivity-label">Lunette 4x</div>
              <div className="sensitivity-value">{config.ads.x4}%</div>
            </div>
            <div className="sensitivity-item">
              <div className="sensitivity-label">Lunette 6x</div>
              <div className="sensitivity-value">{config.ads.x6}%</div>
            </div>
            <div className="sensitivity-item">
              <div className="sensitivity-label">Lunette 8x</div>
              <div className="sensitivity-value">{config.ads.x8}%</div>
            </div>
          </div>
        </div>
      </div>

      <div className="sensitivity-section">
        <h2>📱 Sensibilité Gyroscope</h2>
        <div className="sensitivity-category">
          <h3>Caméra Gyroscope</h3>
          <div className="sensitivity-grid">
            <div className="sensitivity-item">
              <div className="sensitivity-label">Caméra FPS</div>
              <div className="sensitivity-value">{config.gyroscope.fpsCameraGyro}%</div>
            </div>
            <div className="sensitivity-item">
              <div className="sensitivity-label">Caméra TPP</div>
              <div className="sensitivity-value">{config.gyroscope.tppCameraGyro}%</div>
            </div>
          </div>
        </div>
        <div className="sensitivity-category">
          <h3>ADS Gyroscope</h3>
          <div className="sensitivity-grid">
            <div className="sensitivity-item">
              <div className="sensitivity-label">FPS Sans lunette</div>
              <div className="sensitivity-value">{config.gyroscope.fpsNoScopeGyro}%</div>
            </div>
            <div className="sensitivity-item">
              <div className="sensitivity-label">TPP Sans lunette</div>
              <div className="sensitivity-value">{config.gyroscope.tppNoScopeGyro}%</div>
            </div>
            <div className="sensitivity-item">
              <div className="sensitivity-label">Point Rouge</div>
              <div className="sensitivity-value">{config.gyroscope.redDotGyro}%</div>
            </div>
            <div className="sensitivity-item">
              <div className="sensitivity-label">Holographique</div>
              <div className="sensitivity-value">{config.gyroscope.holographicGyro}%</div>
            </div>
            <div className="sensitivity-item">
              <div className="sensitivity-label">Lunette 2x</div>
              <div className="sensitivity-value">{config.gyroscope.x2Gyro}%</div>
            </div>
            <div className="sensitivity-item">
              <div className="sensitivity-label">Lunette 3x</div>
              <div className="sensitivity-value">{config.gyroscope.x3Gyro}%</div>
            </div>
            <div className="sensitivity-item">
              <div className="sensitivity-label">Lunette 4x</div>
              <div className="sensitivity-value">{config.gyroscope.x4Gyro}%</div>
            </div>
            <div className="sensitivity-item">
              <div className="sensitivity-label">Lunette 6x</div>
              <div className="sensitivity-value">{config.gyroscope.x6Gyro}%</div>
            </div>
            <div className="sensitivity-item">
              <div className="sensitivity-label">Lunette 8x</div>
              <div className="sensitivity-value">{config.gyroscope.x8Gyro}%</div>
            </div>
          </div>
        </div>
      </div>

      <div className="tips-section">
        <h2>💡 Conseils pour l'Infinix Note 40</h2>
        <ul className="tips-list">
          <li>
            <strong>Profitez du 120Hz:</strong> Activez le mode haute performance dans les paramètres PUBG pour utiliser pleinement l'écran 120Hz
          </li>
          <li>
            <strong>Gyroscope:</strong> Utilisez le gyroscope pour les ajustements fins en visée, particulièrement efficace avec l'écran AMOLED
          </li>
          <li>
            <strong>Sensibilité tactile:</strong> L'échantillonnage tactile de 360Hz permet des réactions ultra-rapides, ajustez selon votre style
          </li>
          <li>
            <strong>Graphismes optimaux:</strong> Réglez sur "Équilibré" + "Élevé" pour maintenir 60fps constants avec le Helio G99
          </li>
          <li>
            <strong>Mode Jeu:</strong> Activez le mode jeu intégré de l'Infinix pour réduire la latence et bloquer les notifications
          </li>
          <li>
            <strong>Refroidissement:</strong> Faites des pauses toutes les 2-3 parties pour éviter la surchauffe et maintenir les performances
          </li>
          <li>
            <strong>Entraînement:</strong> Testez vos paramètres dans l'arène d'entraînement avant de jouer en classé
          </li>
        </ul>
        <div className="note">
          <strong>⚠️ Note importante:</strong> Ces paramètres sont optimisés pour l'Infinix Note 40 mais peuvent nécessiter des ajustements selon vos préférences personnelles. Commencez avec le mode "Équilibré" et adaptez progressivement.
        </div>
      </div>
    </div>
  );
}
