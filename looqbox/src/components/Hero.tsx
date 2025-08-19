import { SearchOutlined } from "@ant-design/icons";
import { Input, Space, Typography } from "antd";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function Hero() {
  const nav = useNavigate();
  const [params] = useSearchParams();
  const q = params.get("q") ?? "";

  const onEnter = (value: string) => {
    const v = value.trim();
    if (!v) nav("/");
    else nav(`/?q=${encodeURIComponent(v)}`);
  };

  return (
    <div className="hero">
      <div className="container" style={{ textAlign: "center" }}>
        <Space direction="vertical" size={16} style={{ width: "100%" }}>
          <Typography.Title style={{ color: "#fff", marginBottom: 0 }}>
            Inteligência para sua Pokédex
          </Typography.Title>
          <Typography.Paragraph style={{ color: "#cdd3ff", marginTop: 0 }}>
            Busque e explore Pokémon em tempo real — sem recarregar a página.
          </Typography.Paragraph>
          <Input
            size="large"
            defaultValue={q}
            onPressEnter={(e) => onEnter((e.target as HTMLInputElement).value)}
            onChange={(e) => {
              if (e.target.value === "") {
                // limpou -> volta pra lista inicial
                nav("/");
              }
            }}
            placeholder="Digite o nome (ex: pikachu) e pressione Enter"
            prefix={<SearchOutlined />}
            allowClear
          />
          <div
            style={{
              display: "flex",
              gap: 8,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <span className="badge">+1000 espécies</span>
            <span className="badge">API pública</span>
            <span className="badge">SPA com React</span>
          </div>
        </Space>
      </div>
    </div>
  );
}
