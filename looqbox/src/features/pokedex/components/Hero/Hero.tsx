import { Input, Typography, Space } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Badge, BadgesRow, HeroContainer, HeroWrap } from "./Hero.styles";

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
    <HeroWrap>
      <HeroContainer>
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
            placeholder="Digite o nome (ex: pikachu) e pressione Enter"
            prefix={<SearchOutlined />}
            allowClear
            onChange={(e) => {
              if (e.target.value === "") nav("/");
            }}
          />
          <BadgesRow>
            <Badge>+1000 espécies</Badge>
            <Badge>API pública</Badge>
            <Badge>SPA com React</Badge>
          </BadgesRow>
        </Space>
      </HeroContainer>
    </HeroWrap>
  );
}
